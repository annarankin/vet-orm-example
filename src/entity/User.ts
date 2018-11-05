import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Pet } from './Pet'
import { PetWithUpcomingAppointment } from './PetWithUpcomingAppointment'

@Entity('users')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ name: 'first_name' })
	firstName: string

	@Column({ name: 'last_name' })
	lastName: string

	@OneToMany(type => Pet, pet => pet.user, { cascade: true })
	pets: Pet[]

	@OneToMany(type => PetWithUpcomingAppointment, pet => pet.user)
	petsWithAppointments: PetWithUpcomingAppointment[]
}
