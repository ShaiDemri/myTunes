const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
    firstName: String,
    surName: String,
});

module.exports = mongoose.model("user", userSchema);