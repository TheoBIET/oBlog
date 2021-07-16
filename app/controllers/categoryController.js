const {Category} = require('../models');

const categoryController = {
    getAll: async (_, res, next) => {
        const categories = await Category.findAll();

        if(!categories) {
            return next();
        }

        res.status(200).send({data: categories});
    },

    create: async (req, res, next) => {
        const category = new Category(req.body);
        const newCategory = await category.insert();
        
        if(!newCategory) {
            return next();
        }

        res.status(200).send({ message: 'Added Successfully', data: newCategory });
    },
}

module.exports = categoryController;