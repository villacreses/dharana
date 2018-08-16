'use strict'

const db = require('../server/db')
const {User, Project, Task} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'a@a.com', password: '123'}),
  ])
  console.log(`seeded ${users.length} users`)


  const projects = await Promise.all([
    Project.create({title: 'a\'s First Project', userId: 3}),
    Project.create({title: 'a\'s Second Project', userId: 3})
  ])
  console.log(`seeded ${projects.length} projects`)

  const tasks = await Promise.all([
    Task.create({title: 'Task one', userId: 3, due: new Date('September 11, 2001 9:11:00'), projectId: 1}),
    Task.create({title: 'Anotha task', userId: 3, projectId: 1})
  ])
  console.log(`seeded ${tasks.length} tasks`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
