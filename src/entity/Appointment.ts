import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  Timestamp
} from 'typeorm'

import { Pet } from './Pet'

@Entity('appointments')
export class Appointment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'timestamp' })
  date: Timestamp

  @ManyToOne(type => Pet, pet => pet.appointments)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet
}
