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

  @OneToMany(() => Message, message => message.conversation, { cascade: true })
  messages: Message[];

  @ManyToOne(() => User, user => user.conversationsOwner, { nullable: false })
  creator: User;

  @ManyToMany(() => User, user => user.conversations, { nullable: false })
  users: User[];

  @Column({ type: 'datetime'})
  lastViewedTime: Date;

  @CreateDateColumn({ type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: Date;
}
