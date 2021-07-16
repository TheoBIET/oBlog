require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const router = require('./app/router/router');

app.use(express.json());

app.get('/', (_, req) => {
    res.redirect('/api');
});

app.use('/api', router);

app.listen(port, _ => {
    console.log(`Server listening at http://localhost:${port}`);
});