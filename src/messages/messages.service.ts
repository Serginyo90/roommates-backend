import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Message } from './message.entity';
import { Conversation } from '../conversations/conversation.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
  ) {}

  findAll() {
    return this.messageRepository.find();
  }

  async sendMessage(sendMessageDto, user) {
    const conversation = await this.conversationRepository.findOneOrFail({ where: { id: sendMessageDto.conversationId }});
    const message = await this.messageRepository.create({
      text: sendMessageDto.text,
      conversation,
      user,
    });
    return this.messageRepository.save(message);
  }
}
