import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Subscribers } from './subscribers.entity';
import { CreateSubscriberDto } from './subscribers.dto';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectRepository(Subscribers)
    private readonly subscribersRepository: Repository<Subscribers>,
  ) {}

  public async create(dto: CreateSubscriberDto) {
    const subscriber = this.subscribersRepository.create({ email: dto.email, isActive: true });
    try {
      await this.subscribersRepository.save(subscriber);
    } catch (e) {
      throw new BadRequestException();
    }
    return subscriber;
  }
}
