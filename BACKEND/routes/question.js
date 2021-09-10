const router = require("express").Router();
let Question = require("../models/Question");

router.route("/add").post((req,res) => {

    const title = req.body.title;
    const description = req.body.description;
    const tags = req.body.tags;
    const datePublished = Date(req.body.datePublished);

    const newQuestion = new Question({
        title,
        description,
        tags,
        datePublished
    })

    newQuestion.save().then(() => {
        res.json("Question Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    Question.find().then((questions) => {
        res.json(questions)
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/update/:id").put(async (req,res) => {

    let userID = req.params.id;
    const {title, description, tags} = req.body;
    const datePublished = Date(req.body.datePublished);

    const updateQuestion = {
        title,
        description,
        tags,
        datePublished
    }

    const update = await Question.findByIdAndUpdate(userID, updateQuestion)
    .then(()=>{
        res.status(200).send({status: "Question Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Question.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({status: "Question Deleted"});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete question", error: err.message});
        })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Question.findById(userId)
        .then((question) => {
            res.status(200).send({status:"Question fetched", question});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with getting question", error: error.message});
        })
})

module.exports = router;