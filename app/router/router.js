const express = require('express');
const router = express.Router();

const {
    mainController
} = require('../controllers');

router
    .get('/', mainController.home)
    .get('/posts', postController.getAll)
    .get('/categories', categoryController.getAll)

module.exports = router;
