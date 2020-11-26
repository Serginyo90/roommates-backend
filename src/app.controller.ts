import {
  Controller,
  Request,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
  HttpStatus,
  Get,
  Param,
  Render,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

import { AuthService } from './auth/auth.service';
import { SentryInterceptor } from './helpers/interceptors/sentry.interceptor';
import { AppService } from './app.service';
import { UserJwt } from './helpers/decorators/user-jwt.decorator';
import { User } from './users/user.entity';

@UseInterceptors(SentryInterceptor)
@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('upload-canvas')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCanvas(@UploadedFile() file, @Res() res: Response, @UserJwt() user: User) {
    const data = await this.appService.uploadCanvas(file, user);
    res.status(HttpStatus.OK).json(data);
  }

  @Get('images/:image')
  async getImage(
    @Param('image') image: string,
    @Res() res: Response,
  ) {
    const data = await this.appService.getImage(image);
    res.status(HttpStatus.OK).send(data);
  }

  @Get('/landing')
  @Render('index')
  public renderSharePage() {
    return { link: `${this.configService.get('API')}/subscribers`};
  }
}
