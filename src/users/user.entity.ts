import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Conversation } from '../conversations/conversation.entity';
import { Message } from '../messages/message.entity';
import { Hobby } from '../hobbies/hobby.entity';
import { Country } from '../countries/country.entity';
import { State } from '../countries/states/state.entity';
import { City } from '../countries/states/cities/city.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
  CUSTOM = 'custom',
}

export enum UserStatus {
  SEARCHING = 'searching',
  LIVING = 'living',
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

  @ManyToOne(() => Country, { nullable: true })
  country: Country;

  @ManyToOne(() => State, { nullable: true })
  state: State;

  @ManyToOne(() => City, { nullable: true })
  city: City;

  @Column({
    default: false,
  })
  isActivated: boolean;

  @Column({
    default: false,
  })
  isBlocked: boolean;

  @Column({
    default: false,
  })
  isEmailConfirmed: boolean;

  @Column({
    type: 'set',
    enum: UserRole,
    default: [UserRole.USER],
  })
  roles: UserRole[];

  @Column({
    type: 'enum',
    enum: UserGender,
    default: UserGender.MALE,
  })
  gender: UserGender;

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

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.SEARCHING,
  })
  status: UserStatus;

  @Column({ type: 'date'})
  birthday: string;

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
