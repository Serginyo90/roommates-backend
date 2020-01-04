import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from './city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly citiesRepository: Repository<City>,
  ) {}

  async getByStateId(stateId): Promise<City[]> {
    return this.citiesRepository.find({ where: { state: stateId }});
  }
}
