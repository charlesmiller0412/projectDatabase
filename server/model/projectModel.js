const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imgurl: {
        type: String,
        required: true,
    },
    codeurl: {
        type: String,
        required: true,
    },
    siteurl: {
        type: String,
        required: true,
    },
    languages: {
        type: Array,
        required: true,
    },
    favorite: {
        type: Boolean,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Project", projectSchema);
