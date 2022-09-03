const { db } = require('./index');

const config = db.config;
const database = db.database;
const username = db.username;
const password = db.password;
const host = db.host;

module.exports = {

    "development": {
       database,
       username,
       password,
       host,
       dialect: "postgres",
       seederStorage: 'sequelize'
    },

    "production": {
       database,
       username,
       password,
       host,
       dialect: "postgres",
       seederStorage: 'sequelize'
    }
}