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
    getAll: async (_, res) => {
        const posts = await Post.findAll();

        if (!posts) {
            return res.status(404).send('Not Found');
        }

        // We want to retrieve the category to which the post is associated
        for (let post of posts) {
            post = await attachCategoryToPost(post);
        }

        res.status(200).send({ data: posts });
    },

    getOne: async (req, res) => {
        const postID = req.params.postID;
        let post = await Post.findOne(postID);

        // Attach the category to the post
        post = await attachCategoryToPost(post);

        if (!post) {
            res.status(404).send('Not Found');
        }

        res.status(200).send({ data: post });
    },

    getAllByCategory: async (req, res) => {
        const categoryID = req.params.categoryID;
        const posts = await Post.findAllByCategory(categoryID);

        if (!posts || !category) {
            return res.status(404).send('Not Found');
        }

        for (const post of posts) {
            post = await attachCategoryToPost(post);
        }

        res.status(200).send({ data: posts });
    },

    create: async (req, res) => {

    },
}

module.exports = postController;