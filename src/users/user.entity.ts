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
import { Exclude } from 'class-transformer';

import { Conversation } from '../conversations/conversation.entity';
import { Message } from '../messages/message.entity';
import { Hobby } from '../hobbies/hobby.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  firstName: string;

  @Column({
    nullable: true,
  })
  lastName: string;

  @Column({
    length: 510,
    nullable: true,
  })
  description: string;

  @Exclude()
  @Column()
  password: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  avatar: string;

  @Column('varchar', {
    length: 50,
    nullable: true,
  })
  phone: string;

  @Column('varchar', {
    length: 10,
    nullable: true,
  })
  phoneCode: string;

  @Column('varchar', {
    nullable: true,
  })
  country: string;

  @Column('varchar', {
    nullable: true,
  })
  city: string;

  @Column('varchar', {
    nullable: true,
  })
  state: string;

  @Column({
    default: false,
  })
  isActivated: boolean;

  @Column({
    default: false,
  })
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
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'conversations',
      referencedColumnName: 'id',
    },
  })
  conversations: Conversation[];

  @ManyToMany(() => Hobby, hobby => hobby.users)
  @JoinTable({
    name: 'users_hobbies',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'hobbyId',
      referencedColumnName: 'id',
    },
  })
  hobbies: Hobby[];

  @Column({
    default: false,
  })
  allowExtraEmails: string;

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
