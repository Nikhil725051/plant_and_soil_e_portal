const mongoose = require('mongoose');
const {Schema} = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Article', articleSchema);