import { Controller, Get, Post, Body, UseGuards, Request, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { ConfirmDto, CreateUserDto, RegistrationUserDto } from './users.dto';
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
}
