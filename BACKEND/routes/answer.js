const router = require("express").Router();
let Question = require("../models/Question");

router.route("/add").post((req,res) => {

    const qId = req.body.qId;
    const answer = req.body.answer;
    

    const newQuestion = new Answer({
        qId,
        answer
    })

    newQuestion.save().then(() => {
        res.json("Answer Added")
    }).catch((err)=>{
        console.log(err);
    })

})
