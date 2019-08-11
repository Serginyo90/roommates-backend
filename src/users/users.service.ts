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

  async create(user): Promise<User> {
    user.password = await this.cryptoService.hash(user.password);
    const { password, ...res } = await getRepository(User).save(user);
    return res;
  }

  findAll() {
    return getRepository(User).find();
  }

  findOne(email: string): Promise<User | undefined> {
    return getRepository(User).findOne({ email });
  }

  updateOne(user) {
    delete user.password;
    return this.usersRepository.update({ email: user.email }, { ...user });
  }
}
