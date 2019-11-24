import { Controller, Get, Post, Body, UseGuards, Request, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';
import { User, SearchByDto } from './users.interface';
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

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(
    @Request() req,
    @Query() searchByDto: SearchByDto,
  ): Promise<User[]> {
    return await this.usersService.findAll({ userId: req.user.id, searchBy: searchByDto });
  }
}
