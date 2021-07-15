const {Category} = require('../models');

const categoryController = {
    getAll: async (_, res) => {
        const categories = await Category.findAll();

        if(!categories) {
            res.status(404).send('Not Found');
        }

        res.status(200).send({data: categories});
    },

    create: async (req, res) => {
        const category = new Category(req.body);
        const newCategory = await category.insert();
        
        if(!newCategory) {
            return res.status(404).send('An erroroccurred while creating during create new category');
        }

        res.status(200).send({ message: 'Added Successfully', data: newCategory });
    },
}

module.exports = categoryController;