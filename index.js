require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const router = require('./app/router/router');

app.use(router);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});