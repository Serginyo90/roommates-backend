import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../helpers/guards/roles.guard';
import { HobbiesService } from './hobbies.service';
import { Hobby } from './hobby.entity';

@Controller('hobbies')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class HobbiesController {
  constructor(
    private readonly hobbiesService: HobbiesService,
  ) {}

  @Get()
  async findAll(): Promise<Hobby[]> {
    return this.hobbiesService.findAll();
  }
}
