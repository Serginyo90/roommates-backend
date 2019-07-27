import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  // @TODO: Serginyo90 remove hardcoded
  private readonly users: any[] = [{
    email: 'Serginyo90@mail.ru',
    password: '123',
  }];

  async create(user: User) {
    return await getRepository(User).save(user);
  }

  static findAll() {
    return getRepository(User).find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
