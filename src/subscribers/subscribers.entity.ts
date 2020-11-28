import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('subscribers')
export class Subscribers {

  @PrimaryColumn()
  email: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: string;

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: string;
}
