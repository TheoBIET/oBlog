const { Pool } = require('pg');

const client = new Pool({
    ssl: {
        rejectUnauthorized: false
    }
});

console.log(`Connection to DB successfull`);

module.exports = client;