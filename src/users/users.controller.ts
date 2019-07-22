import { Controller, Get, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';
import { User } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    this.usersService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
