const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
    userNewUrlParser: true,
    userUnifiedTopology: true,
    
});
//newcommit
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!");
})

const questionRouter = require("./routes/question.js");
app.use("/question", questionRouter);

//answer router



app.listen(PORT, () => {
    console.log("Server is up and running on port: ${PORT}");
})
