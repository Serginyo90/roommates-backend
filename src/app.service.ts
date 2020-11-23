import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { v1 as uuidv4 } from 'uuid';
import { User } from './users/user.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async uploadCanvas(file, user: User) {
    const name = uuidv4();
    // TODO: @Serginyo90 must be async
    await fs.writeFileSync(`${this.configService.get('MEDIA_PATH')}/${name}.jpeg`, file.buffer);
    const link = `${this.configService.get('API')}/images/${name}.jpeg`;
    user.avatar = link;
    await getRepository(User).save(user);
    return { link };
  }

  public getImage(link: string) {
    const path = `${this.configService.get('MEDIA_PATH')}/${link}`;
    // TODO: @Serginyo90 must be async
    return fs.readFileSync(path);
  }
}
