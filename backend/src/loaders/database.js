const { Model } = require('objection');
const Knex = require('knex');
const mariadb = require('mariadb');
const mysql = require('mysql');
const config = require('../config');
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
