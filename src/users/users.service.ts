import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { User } from './user.entity';
import { CryptoService } from '../core/crypto/crypro.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly cryptoService: CryptoService,
  ) {}

  async create(user: User) {
    user.password = await this.cryptoService.hash(user.password);
    return getRepository(User).save(user);
  }

  findAll() {
    return getRepository(User).find();
  }

  findOne(email: string): Promise<User | undefined> {
    return getRepository(User).findOne({ email });
  }
}
