import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hobby } from './hobby.entity';
import { HobbiesService } from './hobbies.service';
import { HobbiesController } from './hobbies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Hobby])],
  providers: [HobbiesService],
  controllers: [HobbiesController],
})

export class HobbiesModule {}
