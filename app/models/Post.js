const CoreModel = require("./CoreModel");
const pg = require('../database');

class Post extends CoreModel {

    static tableName = 'post'

    constructor(data) {
        super(data);
        for(const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAllByCategory(category_id) {
        try {
            const data = await pg.query(`SELECT * FROM "${this.tableName}" WHERE category_id=$1`, [category_id]);
            return data.rows;
        } catch (error) {
            console.error(error);
        }
    }
    
}

module.exports = Post;