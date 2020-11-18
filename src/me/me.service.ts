import { Injectable, ForbiddenException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from '../auth/auth.service';

import { UpdateProfileDto, UpdatePasswordDto } from './me.dto';
import { User } from '../users/user.entity';
import { PasswordsDontMatch } from '../users/constants';

@Injectable()
export class MeService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  updateProfile(requestUser: User, data: UpdateProfileDto): any {
    if (requestUser.email !== data.email) {
      throw new ForbiddenException('You can\'t modify this user');
    }
    return this.usersService.updateOne(data);
  }

  async updatePassword(requestUser: User, data: UpdatePasswordDto) {
    const isValid = await this.authService.validateUser(requestUser.email, data.oldPassword);
    if (!isValid) {
      throw new ForbiddenException('You can\'t modify this user');
    }
    if (data.newPassword !== data.confirmPassword) {
      throw new ForbiddenException(PasswordsDontMatch);
    }
    return this.usersService.updatePassword(requestUser, data.newPassword);
  }
}
