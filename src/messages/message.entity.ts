import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from '../users/user.entity';
import { Conversation } from '../conversations/conversation.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, user => user.messages, { nullable: false })
  user: User;

  @ManyToOne(() => Conversation, conversation => conversation.messages, { nullable: false   })
  conversation: Conversation;

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
