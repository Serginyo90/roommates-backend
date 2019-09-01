import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { Conversation } from './conversation.entity';
import { User } from '../users/user.entity';
import { Message } from '../messages/message.entity';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationsRepository: Repository<Conversation>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>,
  ) {}

  create(conversation: Conversation) {
    return getRepository(Conversation).save(conversation);
  }

  async findAll(userId) {
    const user = await this.usersRepository
      .createQueryBuilder('u')
      .leftJoinAndSelect('u.conversations', 'conversations')
      .leftJoinAndSelect('conversations.users', 'users', 'users.id != :userId', { userId })
      .leftJoinAndSelect('conversations.messages', 'messages')
      .leftJoinAndMapOne('messages.user', 'messages.user', 'user')
      .where({ id: userId })
      .getOne();
    return user.conversations;
  }

  async sendMessage(user, message, companionId) {
    const companion = await this.usersRepository.findOneOrFail(companionId, { relations: ['conversations'] });

    // TODO: @serginyo90 we must rethink this logic when we want add to conversation more when 2 users
    const companionConverstaionsIds = companion.conversations.map(conversation => conversation.id);
    const userWithRelations = await this.usersRepository
      .createQueryBuilder('u')
      .leftJoinAndSelect('u.conversations', 'conversations')
      .leftJoinAndSelect('conversations.messages', 'messages')
      .where('u.id = :id', { id: user.id })
      .getOne();
    let conversationEntity = userWithRelations.conversations.find(conversation => companionConverstaionsIds.indexOf(conversation.id) !== -1);

    const messageEntity = await this.messagesRepository.create({ text: message, user });
    if (conversationEntity) {
      conversationEntity.messages.push(messageEntity);
    } else {
      conversationEntity = await this.conversationsRepository.create({
        title: 'do we need title?',
        channelId: '123',
        users: [user, companion],
        creator: user,
        messages: [messageEntity],
      });
    }
    await this.conversationsRepository.save(conversationEntity);
    return conversationEntity;
  }
}
