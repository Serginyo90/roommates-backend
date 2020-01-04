import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { State } from './state.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(State)
    private readonly statesRepository: Repository<State>,
  ) {}

  async getByCountryId(countryId): Promise<State[]> {
    return this.statesRepository.find({ where: { country: countryId }});
  }
}
