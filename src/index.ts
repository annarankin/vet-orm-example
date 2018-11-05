import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './entity/User'
import betterConsole from 'better-console'

createConnection().then(async connection => {
  const userRepository = connection.getRepository(User)
  const users = await userRepository.find({ relations: ['petsWithAppointments']})

  const tableData = users.reduce((memo, user) => {
    const userInfo = user.petsWithAppointments.map(pet => (
      {
        userName: `${user.firstName} ${user.lastName}`,
        petName: pet.petName,
        nextAppointment: pet.nextAppointmentDate || '',
      }
    ))

    return memo.concat(userInfo)
  }, [])
  betterConsole.table(tableData)
  await connection.close()
}).catch(error => console.log(error))
