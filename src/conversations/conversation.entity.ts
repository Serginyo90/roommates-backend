import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { User } from '../users/user.entity';
import { Message } from '../messages/message.entity';

@Entity('conversations')
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  channelId: string;

  @OneToMany(() => Message, message => message.conversation)
  messages: Message[];

  @ManyToOne(() => User, user => user.conversationsOwner)
  creator: User;

  @ManyToMany(() => User, user => user.conversations)
  user: User[];

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
