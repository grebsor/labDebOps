// Update with your config settings.
require('dotenv').config()
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'robin.abrahamsson',
      database: 'todo-api'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};