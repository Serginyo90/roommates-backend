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

  @Column({
    nullable: false,
  })
  userId: number;

  @ManyToOne(() => User, user => user.messages, { nullable: false })
  user: User;

  @ManyToOne(() => Conversation, conversation => conversation.messages, { nullable: false   })
  conversation: Conversation;

  @CreateDateColumn({ type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: Date;
}
