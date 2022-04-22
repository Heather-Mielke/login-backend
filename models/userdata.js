const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    Id: Number,
    Username: String,
    Password: String,
    Name: String
});

const userData = mongoose.model('User', userSchema);

module.exports = userData;