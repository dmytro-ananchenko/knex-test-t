const path = require('path');
require('dotenv').config({path:path.join(__dirname,'../.env')});

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      // connectionString: process.env.DB_URL,
      port: process.env.DB_DOCKER_PORT,
      // TODO change to your db name
      database: process.env.DB_NAME,

      // change to your db user
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};