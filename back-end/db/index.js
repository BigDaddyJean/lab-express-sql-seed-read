const initOptions = {
  connect(e) {
    const cp = e.client.connectionParameters;
    console.log("Connected to database:", cp.database);
  },
  error(err, e) {
    console.log(err, e);
  },
};
const pgp = require("pg-promise")(initOptions);
const config= require("../config.js");

const { host, port, database, user } = config.db

const connection = {
  host,
  port,
  database,
  user,
};

const db = pgp(connection);

module.exports = db;
