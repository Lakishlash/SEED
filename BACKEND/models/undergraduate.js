const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const undergraduateSchema = new Schema({

    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type : String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    dateofbirth : {
        type : String,
        required: true
    },
    personaladdress : {
        type : String,
        required: true
    },
    profilepicture : {
        type : String,
        required: true
    },
    personalmail : {
        type : String,
        required: true
    },
    universitymail : {
        type : String,
        required: true
    },
    linkedinprofilelink : {
        type : String,
        required: true
    },
    contactnumber : {
        type : Number,
        required: true
    },
    homecontactnumber : {
        type : Number,
        required: true
    },
    primarycollege : {
        type : String,
        required: true
    },
    secondarycollege : {
        type : String,
        required: true
    },
    university : {
        type : String,
        required: true
    },
    other : {
        type : String,
        required: true
    },
    academicfaculty : {
        type : String,
        required: true
    },
    academicyear : {
        type : Number,
        required: true
    },
    setpassword : {
        type : String,
        required: true
    },
    confirmpassword : {
        type : String,
        required: true
    },
})

const Undergraduate = mongoose.model("Undergraduate",undergraduateSchema);

module.exports = Undergraduate;