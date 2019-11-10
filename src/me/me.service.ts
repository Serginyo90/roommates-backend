import { Injectable, ForbiddenException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import { UpdateProfileDto } from './me.dto';
import { User } from '../users/user.entity';

@Injectable()
export class MeService {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  updateProfile(requestUser: User, data: UpdateProfileDto): any {
    if (requestUser.email !== data.email) {
      throw new ForbiddenException('You can\'t modify this user');
    }
    return this.usersService.updateOne(data);
  }
}
