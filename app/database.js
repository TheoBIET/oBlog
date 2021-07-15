const {Client} = require('pg');

const client = new Client(process.env.PG_URL);

client.connect();
console.log(`Connection to DB ${process.env.PG_URL} successfull`);

module.exports = client;