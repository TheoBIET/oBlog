const {Client} = require('pg');

const client = new Client(process.env.DATABASE_URL);

client.connect();
console.log(`Connection to DB successfull`);

module.exports = client;