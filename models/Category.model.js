const moongose = require("mongoose");

const categoriesSchema = moongose.Schema({
    name: String,
    description: String,
});

const Category = moongose.model("Category", categoriesSchema);

module.exports = Category;