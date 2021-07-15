const express = require('express');
const router = express.Router();

const {
    mainController,
    postController,
    categoryController
} = require('../controllers');

router
    .get('/', mainController.home)
    .get('/posts', postController.getAll)
    .get('/categories', categoryController.getAll)
    .get('*', mainController.notFound);

module.exports = router;
