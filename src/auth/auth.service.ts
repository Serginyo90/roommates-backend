import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CryptoService } from '../core/crypto/crypro.service';
import { UsersService } from '../users/users.service';
import { UserNotFound } from '../users/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly cryptoService: CryptoService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new BadRequestException(UserNotFound);
    }
    const res = await this.cryptoService.compare(pass, user.password);
    if (res) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { ...user };
    return {
      // @see https://github.com/auth0/node-jsonwebtoken#usage
      access_token: this.jwtService.sign(payload),
    };
  }
}
