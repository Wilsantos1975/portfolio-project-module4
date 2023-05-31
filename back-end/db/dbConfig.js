const pgp = require("pg-promise")();

require("dotenv").config();

DATA_BASE_URL = process.env.DATA_BASE_URL;

const cn = DATA_BASE_URL
  ? { // this is for production
      connectionString: DATA_BASE_URL,
      max: 30,
    }
  : { // this is for local development
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
    };
    const db = pgp(cn);


    
module.exports = db;
