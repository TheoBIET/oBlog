const CoreModel = require("./CoreModel");

class Post extends CoreModel {
    static tableName = 'post'
    slug;
    title;
    excerpt;
    content;
    category_id;

    constructor(data) {
        super(data);
        this.slug = data.slug;
        this.title = data.title;
        this.excerpt = data.excerpt;
        this.content = data.content;
        this.category_id = data.category_id;
    }
}

module.exports = Post;