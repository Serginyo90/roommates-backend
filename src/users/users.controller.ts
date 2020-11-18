import { Controller, Get, Post, Body, UseGuards, Request, UseInterceptors, ClassSerializerInterceptor, Query, Res, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

import { UsersService } from './users.service';
import { ConfirmDto, CreateUserDto, RegistrationUserDto, ResetPasswordConfirmDto } from './users.dto';
import { User, SearchByDto } from './users.interface';
import { Role } from '../helpers/decorators/role.decorator';
import { RolesGuard } from '../helpers/guards/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Role('admin')
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll(
    @Request() req,
    @Query() searchByDto: SearchByDto,
  ): Promise<User[]> {
    return await this.usersService.findAll({ userId: req.user.id, searchBy: searchByDto });
  }

  @Post('registration')
  async registration(@Body() registrationUserDto: RegistrationUserDto) {
    return this.usersService.registration(registrationUserDto);
  }

  @Post('confirm')
  async confirm(@Body() confirmDto: ConfirmDto) {
    return await this.usersService.confirm(confirmDto);
  }

  @Post('reset-password')
  async resetPassword(@Body() confirmDto: ConfirmDto) {
    const data = await this.usersService.resetPassword(confirmDto);
    console.log('_resetPassword_data__', data);
    return data;
  }

  @Post('reset-password-confirm')
  async resetPasswordConfirm(
    @Body() resetPasswordConfirmDto: ResetPasswordConfirmDto,
    @Res() res: Response,
  ) {
    await this.usersService.resetPasswordConfirm(resetPasswordConfirmDto);
    res.status(HttpStatus.OK).json();
  }
}
