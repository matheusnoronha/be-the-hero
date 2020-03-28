// Update with your config settings.
require('ts-node/register')

interface KnexConfig {
  [key: string]: object;
}

const knexConfig: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'docker',
      database: 'bethehero'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations',
      extension: 'ts',
      tableName: 'knex_migrations'
    },
    timezone: 'UTC'
  },

  staging: {
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

}

export default knexConfig
