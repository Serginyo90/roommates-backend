import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';
import { User } from './users.interface';
import { Role } from '../helpers/decorators/role.decorator';
import { RolesGuard } from '../helpers/guards/roles.guard';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Role('admin')
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(@Request() req): Promise<User[]> {
    return await this.usersService.findAll(req.user.id);
  }
}
