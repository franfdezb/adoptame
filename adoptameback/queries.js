const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'adopciones',
  password: 'postgres',
  port: 5447,
})