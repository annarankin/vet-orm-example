import { Entity, Column, BaseEntity, PrimaryColumn, Timestamp, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './User'

// Important! This is not a table, and we don't want TypeORM to treat
// it as such - we tell it NOT to synchronize ths model with the DB.
@Entity('pets_with_upcoming_appointments', { synchronize: false })
export class PetWithUpcomingAppointment extends BaseEntity {
  @PrimaryColumn({ name: 'pet_id' })
  petId: number

  @ManyToOne(type => User, user => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({ name: 'pet_name' })
  petName: string

  @Column({ name: 'next_appointment_date', type: 'timestamp' })
  nextAppointmentDate: Timestamp
}
