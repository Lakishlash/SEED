const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    tags : {
        type : String
    },
    datePublished : {
        type : String
    }

})

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
