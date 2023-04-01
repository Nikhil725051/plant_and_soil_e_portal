const mongoose = require('mongoose');
const {Schema} = mongoose;

const quizSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    options: {
        type: [new Schema({
            optionNo: {
                type: Number,
                required: true
            },
            option: {
                type: String,
                required: true
            }
        })],
        required: true
    },
    answerOption: {
        type: Number,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Quiz', quizSchema);