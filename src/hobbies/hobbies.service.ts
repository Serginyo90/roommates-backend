import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Hobby } from './hobby.entity';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(Hobby)
    private readonly hobbiesRepository: Repository<Hobby>,
  ) {}

  findAll() {
    return this.hobbiesRepository.find();
  }
}
