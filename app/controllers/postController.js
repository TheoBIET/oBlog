const { Post, Category } = require('../models');

const attachCategoryToPost = async (post) => {
    const categoryID = post.category_id;
    const category = await Category.findOne(categoryID);

    if (!category) {
        post.category = 'unknow';
    } else {
        post.category = category.label;
    }

    delete post.category_id;
    return post;
}

const postController = {
    getAll: async (_, res, next) => {
        const posts = await Post.findAll();

        if (!posts) {
            return next();
        }

        // We want to retrieve the category to which the post is associated
        for (let post of posts) {
            post = await attachCategoryToPost(post);
        }

        res.status(200).send({ data: posts });
    },

    getOne: async (req, res, next) => {
        const postID = req.params.postID;
        let post = await Post.findOne(postID);

        if(!post) {
            return next();
        }

        // Attach the category to the post
        post = await attachCategoryToPost(post);

        if (!post) {
            res.status(404).send('Not Found');
        }

        res.status(200).send({ data: post });
    },

    getAllByCategory: async (req, res, next) => {
        const categoryID = req.params.categoryID;
        const posts = await Post.findAllByCategory(categoryID);

        if (!posts) {
            return next();
        }

        for (let post of posts) {
            post = await attachCategoryToPost(post);
        }

        res.status(200).send({ data: posts });
    },

    create: async (req, res, next) => {
        const post = new Post(req.body);
        const newPost = await post.insert();
        
        if(!newPost) {
            return next();
        }

        res.status(200).send({ message: 'Added Successfully', data: newPost });
    },
}

module.exports = postController;