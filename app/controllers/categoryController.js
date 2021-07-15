const {Category} = require('../models');

const categoryController = {
    getAll: async (_, res) => {
        const categories = await Category.findAll();

        if(!categories) {
            res.status(404).send('Not Found');
        }

        res.status(200).send({data: categories});
    }
}

module.exports = categoryController;