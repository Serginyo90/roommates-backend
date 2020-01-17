import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, OneToMany,
} from 'typeorm';

import { State } from '../state.entity';
import { Country } from '../../country.entity';
import { User } from '../../../users/user.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => State, { nullable: false })
  state: State;

  @ManyToOne(() => Country, { nullable: false })
  country: Country;

  @OneToMany(() => User, user => user.city, { nullable: true })
  users: User[];

  @Column({
    type: 'decimal',
  })
  latitude: number;

  @Column({
    type: 'decimal',
  })
  longitude: number;

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
