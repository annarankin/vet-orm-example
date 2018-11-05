import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateView1541380756402 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE VIEW pets_with_upcoming_appointments AS
        SELECT DISTINCT ON (pets.id)
          pets.id AS pet_id,
          users.id AS user_id,
          pets.name AS pet_name,
          MIN(appointments.date) AS next_appointment_date
        FROM users
        INNER JOIN pets
            ON pets.user_Id = users.id
        LEFT JOIN appointments
            ON pets.id = appointments.pet_id
            AND appointments.date >= CURRENT_DATE
        GROUP BY (
            users.id,
            pets.id,
            pets.name
        )
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      DROP VIEW pets_with_upcoming_appointments
    `)
  }

}
