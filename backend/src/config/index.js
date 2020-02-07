const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});
module.exports = {
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET
  },
  hash: {
    saltRounds: 10
  },
  db: {
    dev: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      db: process.env.DEV_DB
    },
    prod: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      db: process.env.PROD_DB
    }
  }
} 
