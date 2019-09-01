import { Controller, Get, Post, UseGuards, Body, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Message } from './message.entity';
import { MessagesService } from './messages.service';
import { RolesGuard } from '../helpers/guards/roles.guard';
import { SendMessageDto } from './messages.dto';

@Controller('messages')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class MessagesController {
  constructor(
    private readonly messageService: MessagesService,
  ) {}

  @Get()
  async findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Post()
  async sendMessage(
    @Request() req,
    @Body() sendMessageDto: SendMessageDto,
  ) {
    return this.messageService.sendMessage(sendMessageDto, req.user);
  }
}
