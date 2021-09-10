const router = require("express").Router();
let Undergraduate = require("../models/undergraduate");

http://Localhost:8070/undergraduate/add

router.route("/add").post((req,res)=>{

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const dateofbirth = req.body.dateofbirth;
    const personaladdress = req.body.personaladdress;
    const profilepicture = req.body.profilepicture;
    const personalmail = req.body.personalmail;
    const universitymail = req.body.universitymail;
    const linkedinprofilelink = req.body.linkedinprofilelink;
    const contactnumber = Number(req.body.contactnumber);
    const homecontactnumber = Number(req.body.homecontactnumber);
    const primarycollege = req.body.primarycollege;
    const secondarycollege = req.body.secondarycollege;
    const university = req.body.university;
    const other = req.body.other;
    const academicfaculty = req.body.academicfaculty;
    const academicyear = Number(req.body.academicyear);
    const setpassword = req.body.setpassword;
    const confirmpassword = req.body.confirmpassword;

    const newUndergraduate = new Undergraduate({

        firstname,
        lastname,
        gender,
        dateofbirth,
        personaladdress,
        profilepicture,
        personalmail,
        universitymail,
        linkedinprofilelink,
        contactnumber,
        homecontactnumber,
        primarycollege,
        secondarycollege,
        university,
        other,
        academicfaculty,
        academicyear,
        setpassword,
        confirmpassword
    })

    newUndergraduate.save().then(()=>{
        res.json("Undergraduate Profile Created")
    }).catch((err)=>{
        console.log(err);
    })

})

http://Localhost:8070/undergraduate/

router.route("/").get((req,res)=>{

    Undergraduate.find().then((undergraduates)=>{
        res.json(undergraduates)
    }).catch((err)=>{
        console.log(err)
    })
    
})

http://Localhost:8070/undergraduate/update/

router.route("/update/:undergraduateid").put(async (req, res) => {
    let userId = req.params.undergraduateid;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const dateofbirth = req.body.dateofbirth;
    const personaladdress = req.body.personaladdress;
    const profilepicture = req.body.profilepicture;
    const personalmail = req.body.personalmail;
    const universitymail = req.body.universitymail;
    const linkedinprofilelink = req.body.linkedinprofilelink;
    const contactnumber = Number(req.body.contactnumber);
    const homecontactnumber = Number(req.body.homecontactnumber);
    const primarycollege = req.body.primarycollege;
    const secondarycollege = req.body.secondarycollege;
    const university = req.body.university;
    const other = req.body.other;
    const academicfaculty = req.body.academicfaculty;
    const academicyear = Number(req.body.academicyear);
    const setpassword = req.body.setpassword;
    const confirmpassword = req.body.confirmpassword;

    const updateUndergraduate = {
        firstname,
        lastname,
        gender,
        dateofbirth,
        personaladdress,
        profilepicture,
        personalmail,
        universitymail,
        linkedinprofilelink,
        contactnumber,
        homecontactnumber,
        primarycollege,
        secondarycollege,
        university,
        other,
        academicfaculty,
        academicyear,
        setpassword,
        confirmpassword  
    }

    const update = await Undergraduate.findByIdAndUpdate(userId, updateUndergraduate).then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:  err.message});
    })

})

http://Localhost:8070/undergraduate/delete/

router.route("/delete/:undergraduateid").delete(async(req,res)=>{
    let userId = req.params.undergraduateid;

    await Undergraduate.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:undergraduateid").get(async(req,res)=>{
    let userId = req.params.undergraduateid;
    const user = await Undergraduate.findById(userId).then((undergraduate)=>{
        res.status(200).send({status: "User fetched", undergraduate})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;