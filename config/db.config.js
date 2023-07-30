require('dotenv').config();
module.exports = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USERNAME || 'root',
    PASSWORD: process.env.DB_PASSWORD || 'root',
    PORT: process.env.DB_PORT || 3306,
    DB: process.env.DB_DATABASE,
    dialect: "mysql",
    pool: {
      max: 5, //
      min: 0, //
      acquire: 30000, //
      idle: 10000 //
    }
};