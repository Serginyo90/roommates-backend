import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { Hobby } from '../hobbies/hobby.entity';
import { CoreModule } from '../core/core.module';
import { SendgridService } from '../core/sendgrid/sendgrid.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Hobby]), CoreModule],
  providers: [UsersService, SendgridService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
