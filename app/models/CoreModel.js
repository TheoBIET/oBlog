const pg = require('../database');

class CoreModel {

    static tableName = null;
    #id;

    constructor(data) {
        this.#id = data.id;
    }

    get id() {
        return this.#id;
    }

    static async findAll() {
        try {
            const data = await pg.query(`SELECT * FROM "${this.tableName}"`);
            return data.rows;
        } catch (error) {
            console.error('Une erreur s\'est produite');
        }
    }

    static async findOne(id) {
        try {
            const data = await pg.query(`SELECT * FROM "${this.tableName}" WHERE id=$1`, [id]);
            return data.rows[0];
        } catch (error) {
            console.error('Une erreur s\'est produite');
        }
    }
}

module.exports = CoreModel;