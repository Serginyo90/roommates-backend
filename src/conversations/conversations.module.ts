import { Module } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './conversation.entity';
import { ConversationsController } from './conversations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation])],
  providers: [ConversationsService],
  exports: [ConversationsService],
  controllers: [ConversationsController],
})
export class ConversationsModule {}
