import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { Conversation } from './conversation.entity';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationsRepository: Repository<Conversation>,
  ) {}

  create(conversation: Conversation) {
    return getRepository(Conversation).save(conversation);
  }

  findAll() {
    return getRepository(Conversation).find();
  }
}
