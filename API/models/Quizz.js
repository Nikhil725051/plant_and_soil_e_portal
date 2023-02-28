const mongoose = require('mongoose');
const {Schema} = mongoose;

const quizzSchema = new Schema({
    question: {
        type: String,
        require: true,
        unique: true
    },
    options: {
        type: [new Schema({
            optionNo: {
                type: Number,
                require: true
            },
            option: {
                type: String,
                require: true
            }
        })],
        require: true
    },
    answerOption: {
        type: Number,
        require: true
    },
    createdBy: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Quizz', quizzSchema);