const { Client } = require('pg');

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);
console.log('process.env.CA_CERT', process.env.CA_CERT);
const client =
// new Client(process.env.DATABASE_URL);
// DB_USERNAME
// DB_PASSWORD
// DB_HOST
// DB_PORT
// DB_DATABASE
// DB_SSLMODE
new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.CA_CERT,
  },
})

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
  process.exit(0);
});
