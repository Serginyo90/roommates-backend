import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UpdateProfileDto } from './me.dto';
import { MeService } from './me.service';
import { UsersService } from '../users/users.service';
import { RolesGuard } from '../helpers/guards/roles.guard';

@Controller('me')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class MeController {
  constructor(
    private readonly meService: MeService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getProfile(@Request() req) {
    return this.usersService.findOne(req.user.email);
  }

  @Put()
  async updateProfile(
    @Request() req,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.meService.updateProfile(req.user, updateProfileDto);
  }
}
