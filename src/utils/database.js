const { Sequelize } = require('sequelize');
require('dotenv').config(); // Importar el paquete dotenv para cargar las variables de entorno

const db = new Sequelize({
  dialect: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

module.exports = { db };
