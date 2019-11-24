import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, Not, Like } from 'typeorm';

import { User } from './user.entity';
import { Hobby } from '../hobbies/hobby.entity';
import { CryptoService } from '../core/crypto/crypro.service';
import { FetchUsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Hobby)
    private readonly hobbiesRepository: Repository<Hobby>,
    private readonly cryptoService: CryptoService,
  ) {}

  async create(user): Promise<User> {
    user.password = await this.cryptoService.hash(user.password);
    const { password, ...res } = await getRepository(User).save(user);
    return res;
  }

  findAll(fetchUsersDto: FetchUsersDto) {
    const { userId, searchBy: { firstName, lastName, email } } = fetchUsersDto;
    if (firstName || lastName || email) {
      return this.usersRepository.find({ where: {
        id: Not(userId),
        firstName: firstName ? Like(`%${firstName}%`) : Not(''),
        lastName: lastName ? Like(`%${lastName}%`) : Not(''),
        email: email ? Like(`%${email}%`) : Not(''),
      }, relations: ['hobbies'] });
    }
    return this.usersRepository.find({ where: { id: Not(userId) }, relations: ['hobbies'] });
  }

  findOne(email: string): Promise<User | undefined> {
    return getRepository(User).findOne({ email }, { relations: ['hobbies']});
  }

  async updateOne({ password, ...user}) {
    const userEntity = await this.usersRepository.findOne(user.id);
    if (user.hobbies.length) {
      user.hobbies = await this.hobbiesRepository.findByIds(user.hobbies);
    }
    try {
      await this.usersRepository.save({ ...userEntity, ...user });
    } catch (e) {
      throw e;
    }
    return { ...user };
  }

  async updatePassword(user, newPassword) {
    user.password = await this.cryptoService.hash(newPassword);
    return this.usersRepository.save(user);
  }
}
