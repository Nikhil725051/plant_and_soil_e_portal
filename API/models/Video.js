const mongoose = require('mongoose');
const {Schema} = mongoose;

const videoSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    url: {
        type: String,
        require: true,
        unique: true
    },
    addedBy: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Video', videoSchema);