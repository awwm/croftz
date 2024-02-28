const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root-password",
  port: 5432,
  database: "croftz-todo"
});

module.exports = pool;