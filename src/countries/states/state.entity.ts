import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Country } from '../country.entity';
import { City } from './cities/city.entity';
import { User } from '../../users/user.entity';

@Entity('states')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    default: false,
  })
  isActive: boolean;

  @ManyToOne(() => Country, { nullable: false })
  country: Country;

  @OneToMany(() => City, city => city.state, { nullable: true })
  cities: City[];

  @OneToMany(() => User, user => user.state, {
    nullable: true })
  users: User[];

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
