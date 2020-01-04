import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { RegistrationUserDto } from './users/users.dto';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('registration')
  async registration(@Body() registrationUserDto: RegistrationUserDto) {
    return this.usersService.create(registrationUserDto);
  }
}
