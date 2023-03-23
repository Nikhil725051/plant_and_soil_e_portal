const mongoose = require('mongoose');
const {Schema} =  mongoose;

const plantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    soilTypes: {
        type: String,
        required: true
    },

    sunRequirements: {
        type: String,
        required: true
    },

    flowerTime: {
        type: String,
        required: true
    },

    addedBy: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Plant', plantSchema);
