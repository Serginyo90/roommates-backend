import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateConversationDto } from './conversations.dto';
import { ConversationsService } from './conversations.service';
import { Conversation } from './conversation.entity';
import { RolesGuard } from '../helpers/guards/roles.guard';

@Controller('conversations')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}
  @Post()
  async create(@Body() createConversationDto: CreateConversationDto) {
    return this.conversationsService.create(createConversationDto);
  }

  @Get()
  async findAll(): Promise<Conversation[]> {
    return this.conversationsService.findAll();
  }
}
