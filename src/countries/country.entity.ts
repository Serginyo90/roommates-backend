import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { State } from './states/state.entity';
import { City } from './states/cities/city.entity';
import { User } from '../users/user.entity';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    length: 2,
    nullable: false,
    unique: true,
  })
  iso2: string;

  @Column({
    length: 3,
    nullable: false,
    unique: true,
  })
  iso3: string;

  @Column({
    length: 10,
    nullable: false,
  })
  phoneCode: string;

  @Column({
    nullable: true,
  })
  capital: string;

  @Column({
    length: 3,
    nullable: false,
  })
  currency: string;

  @OneToMany(() => State, state => state.country, { nullable: true })
  states: State[];

  @OneToMany(() => City, city => city.country, { nullable: true })
  cities: City[];

  @OneToMany(() => User, user => user.country, {
  nullable: true })
  users: User[];

  @CreateDateColumn({ type: 'datetime'})
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime'})
  updatedAt: string;
}
