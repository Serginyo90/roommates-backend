import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { City } from './cities/city.entity';
import { CitiesService } from './cities/cities.service';

@Controller('states')
export class StatesController {
  constructor(
    private readonly citiesService: CitiesService,
  ) {}

  @Get(':stateId')
  async getByStateId(
    @Param('stateId', new ParseIntPipe()) stateId: number,
  ): Promise<City[]> {
    return this.citiesService.getByStateId(stateId);
  }
}
