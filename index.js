const { Client } = require('pg');

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);
// const client = new Client(process.env.DATABASE_URL);
//
// client.connect();
//
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// });

console.log('hi', 19);

process.exit(0);
