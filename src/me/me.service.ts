import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class MeService {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  updateProfile(data): any {
    return this.usersService.updateOne(data);
  }
}
