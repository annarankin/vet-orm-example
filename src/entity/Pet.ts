import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany, JoinColumn } from 'typeorm'
import { User } from './User'
import { Appointment } from './Appointment'

@Entity('pets')
export class Pet extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => User, user => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(type => Appointment, appointment => appointment.pet, { cascade: true })
  appointments: Appointment
}
