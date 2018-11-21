# TypeORM & SQL View Example

## Notes & Technology

This project demonstrates how to create and interact with a SQL view while using [TypeORM](http://typeorm.io).

*Files of note:*

- `src/entity/PetWithUpcomingAppointment.ts`
- `src/migration/1541380756402-CreateView.ts`

The code in this repository is written in [Typescript](https://www.typescriptlang.org), a superset of JavaScript. The scripts defined in `package.json` use the [`ts-node`](https://www.npmjs.com/package/ts-node) package to execute these files (more on that [here](https://www.npmjs.com/package/ts-node#how-it-works)). If you try to execute the files in `./src` directly with node, you're gonna have a bad time!

## How To Get Running

1. Run `npm i` command
1. Create a Postgres database named `vet_orm_dev`
1. Update database settings inside `ormconfig.json` file
1. Run `npm run seed` to populate your database
1. Run `npm run typeorm migration:run` to create the view
1. Run the `npm start` command to see the information from your view logged to the console!
