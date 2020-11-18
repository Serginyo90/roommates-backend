import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, Not, Like } from 'typeorm';
import * as Redis from 'ioredis';
import { v1 as uuidv4 } from 'uuid';

import { User } from './user.entity';
import { Hobby } from '../hobbies/hobby.entity';
import { CryptoService } from '../core/crypto/crypro.service';
import { ConfirmDto, FetchUsersDto, ResetPasswordConfirmDto } from './users.dto';
import { SendgridService } from '../core/sendgrid/sendgrid.service';
import { BadDataException } from '../helpers/exceptions/bad-data.exception';
import { InvalidToken, PasswordsDontMatch, UserAlreadyExists, UserAlreadyRegistered, UserNotFound } from './constants';
import { REDIS_TOKEN } from '../core/core.constants';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Hobby)
    private readonly hobbiesRepository: Repository<Hobby>,
    private readonly cryptoService: CryptoService,
    private readonly sendgridService: SendgridService,
    @Inject(REDIS_TOKEN)
    private readonly redis: Redis,
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
      throw new BadDataException(UserAlreadyRegistered);
    }
    if (userFromDB) {
      throw new BadDataException(UserAlreadyExists);
    }
    // send confirm email
    const isWasSent = await this.sendgridService.sendConfirmEmail(user);
    console.log('__isWasSent__', { isWasSent });
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
      throw new Error(UserNotFound);
    }
    user.isEmailConfirmed = true;
    await this.usersRepository.save(user);
    return true;
  }

  async resetPassword(confirmDto: ConfirmDto) {
    const user = await this.findOne(confirmDto.email);
    if (!user) {
      throw new Error(UserNotFound);
    }
    const token = uuidv4();
    console.log('__before_set_token__', token, user.email);
    try {
      await this.redis.set(token, user.email);
      await this.redis.expire(token, 60 * 60 * 24);
    } catch (e) {
      console.log('__e__', { e });
      throw new BadRequestException();
    }
    // send reset password email
    return await this.sendgridService.sendResetPasswordEmail(user, token);
  }

  async resetPasswordConfirm(dto: ResetPasswordConfirmDto) {
    if (dto.password !== dto.passwordConfirm) {
      throw new BadRequestException(PasswordsDontMatch);
    }
    //  take token
    console.log('__1__', dto.token);
    const email = await this.redis.get(dto.token);
    console.log('__1_1_');
    if (!email) {
      throw new BadDataException(InvalidToken);
    }
    const user = await this.findOne(email);
    if (!user) {
      throw new BadRequestException(UserNotFound);
    }
    console.log('__delete_token__', dto.token);
    this.redis.del(dto.token);
    try {
      await this.updatePassword(user, dto.password);
    } catch (e) {
      console.log('__e__', { e });
      throw new BadRequestException();
    }
    return true;
  }
}
