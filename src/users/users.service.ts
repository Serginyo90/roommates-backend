import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, Not, Like } from 'typeorm';

import { User } from './user.entity';
import { Hobby } from '../hobbies/hobby.entity';
import { CryptoService } from '../core/crypto/crypro.service';
import { ConfirmDto, FetchUsersDto } from './users.dto';
import { SendgridService } from '../core/sendgrid/sendgrid.service';
import { BadDataException } from '../helpers/exceptions/bad-data.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Hobby)
    private readonly hobbiesRepository: Repository<Hobby>,
    private readonly cryptoService: CryptoService,
    private readonly sendgridService: SendgridService,
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
      }, relations: ['hobbies', 'country', 'state', 'city'] });
    }
    return this.usersRepository.find({ where: { id: Not(userId) }, relations: ['hobbies', 'country', 'state', 'city'] });
  }

  findOne(email: string): Promise<User | undefined> {
    return getRepository(User).findOne({ email }, { relations: ['hobbies', 'country', 'state', 'city']});
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

  async registration(user) {
    const userFromDB = await this.usersRepository.findOne({ where: { email: user.email }});
    if (userFromDB && !userFromDB.isEmailConfirmed) {
      await this.sendgridService.sendConfirmEmail(user.email);
      throw new BadDataException('User already registered');
    }
    if (userFromDB) {
      throw new BadDataException('User already exists');
    }
    // send confirm email
    const isWasSent = await this.sendgridService.sendConfirmEmail(user.email);
    if (isWasSent) {
      user.password = await this.cryptoService.hash(user.password);
      const { password, ...res } = await getRepository(User).save(user);
      return res;
    }
  }

  async confirm(confirmDto: ConfirmDto) {
    const user = await this.findOne(confirmDto.email);
    console.log('__user__', { user });
    if (!user) {
      throw new Error('User not found');
    }
    user.isEmailConfirmed = true;
    await this.usersRepository.save(user);
    return true;
  }
}
