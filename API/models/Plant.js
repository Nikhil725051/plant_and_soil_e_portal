const mongoose = require('mongoose');
const {Schema} =  mongoose;

const plantSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    soilTypes: {
        type: String,
        require: true
    },

    sunRequirements: {
        type: String,
        require: true
    },

    flowerTime: {
        type: String,
        require: true
    },

    addedBy: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Plant', plantSchema);
