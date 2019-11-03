import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../users/user.entity';

@Entity('hobbies')
export class Hobby {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    length: 200,
    unique: true,
  })
  name: string;

  @ManyToMany(() => User, user => user.hobbies, { nullable: false })
  users: User[];

  @CreateDateColumn({
    type: 'datetime',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'datetime',
  })
  updatedAt: string;
}
