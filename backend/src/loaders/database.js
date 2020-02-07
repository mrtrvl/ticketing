const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('../config/knexfile');
const knexConfig = knexFile.development;

async function initDatabase() {
  console.log(`Initializing database ...`);
  const knex = Knex(knexConfig);
  Model.knex(knex);
  console.log(`Database initialized`);
}

module.exports = {
  initDatabase
}
