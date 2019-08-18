import { Controller, Get, UseGuards } from '@nestjs/common';

import { Message } from './message.entity';
import { MessagesService } from './messages.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../helpers/guards/roles.guard';

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
}
