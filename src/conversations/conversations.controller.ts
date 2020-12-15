import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateConversationDto, SendMessageDto } from './conversations.dto';
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
  findAll(@Request() req): Promise<Conversation[]> {
    return this.conversationsService.findAll(req.user.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post(':companionId')
  async sendMessage(
    @Request() req,
    @Body() sendMessageDto: SendMessageDto,
    @Param('companionId', new ParseIntPipe()) companionId: number,
  ) {
    return await this.conversationsService.sendMessage(req.user, sendMessageDto.message, companionId);
  }

  @Get(':conversationId')
  getConversationMessagesById(
    @Param('conversationId', new ParseIntPipe()) conversationId: number,
  ): Promise<Conversation> {
    return this.conversationsService.findOneById(conversationId);
  }
}
