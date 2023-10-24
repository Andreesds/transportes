import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class DeliveryDetails {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantity: string;
  @Column()
  cost: string;
  @Column()
  discount: number;
  @Column({ type: 'time' })
  startTime: string;
  @Column()
  endTime: string;
  @Column()
  location: string;
  @Column()
  latitude: string;
  @Column()
  length: string;
  @Column()
  rating: string;
  @Column({ default: 'ACT' })
  status: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dateCreated: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dateChange: string;
  @Column()
  userCreated: string;
  @Column({ default: null })
  userChange: string;
  @DeleteDateColumn()
  deletedAt: Date;
}
