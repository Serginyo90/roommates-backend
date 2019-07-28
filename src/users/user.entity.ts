import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Conversation } from '../conversations/conversation.entity';
import { Message } from '../messages/message.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column('varchar', { length: 50 })
  phone: string;

  @Column('varchar', { length: 10 })
  phoneCode: string;

  @Column()
  isActivated: boolean;

  @Column()
  isBlocked: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @OneToMany(() => Conversation, conversation => conversation.creator)
  conversationsOwner: Conversation[];

  @OneToMany(() => Message, message => message.user)
  messages: Message[];

  @ManyToMany(() => Conversation, conversation => conversation.users)
  @JoinTable({
    name: 'users_conversations',
    joinColumn: {
      name: 'conversations',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'users',
      referencedColumnName: 'id',
    },
  })
  conversations: Conversation[];

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
