const mongoose = require('mongoose');
const {Schema} = mongoose;

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    addedBy: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Video', videoSchema);