const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'simongutierrez',
  password: 'xavimessi1',
  host: 'localhost',
  port: 5432,
  database: 'perntodo'
});

module.exports = pool;
