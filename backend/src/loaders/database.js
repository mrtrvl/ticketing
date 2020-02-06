const { Model } = require('objection');
const Knex = require('knex');
const mariadb = require('mariadb');
const mysql = require('mysql');
const config = require('../config');
const initialSchema = require('../migrations/initialSchema');

const knexConfig = {
  client: 'mysql',
  useNullAsDefault: true,
  connection: {
    user: config.db.user,
    password: config.db.password,
    host: config.db.host,
    port: config.db.port,
    database: config.db.db
  },
  pool: {
    min: 2,
    max: 10
  },
  knexFile: initialSchema
};

async function initDatabase() {
  console.log(`Initializing database ...`);
  const knex = Knex(knexConfig);
  Model.knex(knex);
  if (await knex.schema.hasTable('persons')) {
    console.log(`Table already exists.`);
  } else {
    console.log(`Creating database ...`);
    await knex.migrate.up();
  }
  console.log(`Database initialized`);
}

module.exports = {
  initDatabase
}
