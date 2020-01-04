import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from './country.entity';
import { State } from './states/state.entity';
import { StatesService } from './states/states.service';

@Controller('countries')
export class CountriesController {
  constructor(
    private readonly countriesService: CountriesService,
    private readonly statesService: StatesService,
  ) {}

  @Get()
  async findAll(): Promise<Country[]> {
    return this.countriesService.findAll();
  }

  @Get(':countryId')
  async getByCountryId(
    @Param('countryId', new ParseIntPipe()) countryId: number,
  ): Promise<State[]> {
    return this.statesService.getByCountryId(countryId);
  }
}
