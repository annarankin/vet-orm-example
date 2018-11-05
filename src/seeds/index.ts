import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from '../entity/User'
import { Pet } from '../entity/Pet'
import { Appointment } from '../entity/Appointment'
import seedData from './users.json'

const usersFrom = (seedData) => {
  return seedData.map(userInfo => {
    const user = new User()
    user.firstName = userInfo.firstName
    user.lastName = userInfo.lastName
    user.pets = userInfo.pets.map(petInfo => {
      const pet = new Pet()
      pet.name = petInfo.name
      pet.appointments = petInfo.appointments.map(apptInfo => {
        const appointment = new Appointment()
        appointment.date = apptInfo.date
        return appointment
      })
      return pet
    })

    return user
  })
}

createConnection().then(async connection => {
  const userRepository = await connection.getRepository(User)
  const petRepository = await connection.getRepository(Pet)
  const appointmentRepository = await connection.getRepository(Appointment)

  console.log('Clearing out database...')
  await appointmentRepository.delete({})
  await petRepository.delete({})
  await userRepository.delete({})

  console.log('Inserting seed data into the database...')
  const users = usersFrom(seedData)
  await userRepository.save(users)

  console.log('All set!')
  await connection.close()
}).catch(error => console.log(error))
