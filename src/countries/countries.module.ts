import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Country } from './country.entity';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { StatesService } from './states/states.service';
import { CitiesService } from './states/cities/cities.service';
import { State } from './states/state.entity';
import { StatesController } from './states/states.controller';
import { City } from './states/cities/city.entity';
import { CitiesController } from './states/cities/cities.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Country, State, City])],
  providers: [CountriesService, StatesService, CitiesService],
  controllers: [CountriesController, StatesController, CitiesController],
})
export class CountriesModule {}
