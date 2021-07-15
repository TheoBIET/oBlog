const {Post, Category} = require('../models');

const postController = {
    getAll: async (_, res) => {
        const posts = await Post.findAll();

        if(!posts) {
            return res.status(404).send('Not Found');
        }

        // We want to retrieve the category to which the post is associated
        for(const post of posts) {
            const category = await Category.findOne(post.category_id);

            if(!category) {
                return post.category = 'inconnue';
            }

            delete post.category_id;
            post.category = category.label;
        }

        res.status(200).send({data: posts});
    }
}

module.exports = postController;