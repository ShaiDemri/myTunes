const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
    query: String,
    user: String,
    count: {type: Number, default: 1},
});

module.exports = mongoose.model('query', querySchema);