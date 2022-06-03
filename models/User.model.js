const moongose = require("mongoose");

const usersSchema = moongose.Schema({
    name: String,
});

const User = moongose.model("User", usersSchema);

module.exports = User;