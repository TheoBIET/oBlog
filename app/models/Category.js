const CoreModel = require("./CoreModel");

class Category extends CoreModel {
    static tableName = 'category'
    label;
    route;

    constructor(obj) {
        super(obj);
        this.label = obj.label;
        this.route = obj.route;
    }
}

module.exports = Category;