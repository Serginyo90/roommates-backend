import { Body, Controller, Get, Put, UseGuards, ClassSerializerInterceptor, UseInterceptors, Res, Request, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

import { UpdateProfileDto, UpdatePasswordDto } from './me.dto';
import { MeService } from './me.service';
import { UsersService } from '../users/users.service';
import { RolesGuard } from '../helpers/guards/roles.guard';

@UseInterceptors(ClassSerializerInterceptor)
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

  @Put('/password')
  async updatePassword(
    @Request() req,
    @Body() updatePasswordDto: UpdatePasswordDto,
    @Res() res: Response,
  ) {
    await this.meService.updatePassword(req.user, updatePasswordDto);
    res.status(HttpStatus.OK).send();
  }
}
