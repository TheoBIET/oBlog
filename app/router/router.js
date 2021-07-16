const express = require('express');
const router = express.Router();

const {
    mainController,
    postController,
    categoryController
} = require('../controllers');

router
    // API Informations
    .get('/', mainController.home)

    // Post Routes
    .get('/posts', postController.getAll)
    .get('/posts/:postID(\\d+)', postController.getOne)
    .get('/posts/category/:categoryID(\\d+)', postController.getAllByCategory)
    .post('/posts', postController.create)

    // Category Routes
    .get('/categories', categoryController.getAll)
    .post('/categories', categoryController.create)

    // Error Handler
    .use(mainController.notFound);

module.exports = router;