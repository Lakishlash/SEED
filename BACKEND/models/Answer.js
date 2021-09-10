const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({

    qId : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true
    }

})

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
