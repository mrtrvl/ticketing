const config = require('./index');
const initialSchema = require('./migrations/initialSchema');
module.exports = {
  development: {
    client: 'mysql',
    useNullAsDefault: true,
    connection: {
      user: config.db.dev.user,
      password: config.db.dev.password,
      host: config.db.dev.host,
      port: config.db.dev.port,
      database: config.db.dev.db
    },
    pool: {
      min: 2,
      max: 10
    },
    knexFile: initialSchema,
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    useNullAsDefault: true,
    connection: {
      user: config.db.prod.user,
      password: config.db.prod.password,
      host: config.db.prod.host,
      port: config.db.prod.port,
      database: config.db.prod.db
    },
    pool: {
      min: 2,
      max: 10
    },
    knexFile: initialSchema,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
