import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UpdateProfileDto } from './me.dto';
import { MeService } from './me.service';
import { UsersService } from '../users/users.service';

@Controller('me')
@UseGuards(AuthGuard('jwt'))
export class MeController {
  constructor(
    private readonly meService: MeService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getProfile(@Request() req) {
    return this.usersService.findOne(req.user.email);
  }

  @Post()
  async updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    return this.meService.updateProfile(updateProfileDto);
  }
}
