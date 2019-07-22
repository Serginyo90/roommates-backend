import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

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
}
