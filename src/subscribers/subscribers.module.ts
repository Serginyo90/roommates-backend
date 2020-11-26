import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { Subscribers } from './subscribers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscribers])],
  providers: [SubscribersService],
  controllers: [SubscribersController],
  exports: [SubscribersService],
})
export class SubscribersModule {}
