const mongoose = require('mongoose');
const {Schema} = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    article: {
        type: String,
        require: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    postedBy: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Article', articleSchema);