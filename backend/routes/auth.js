const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usrSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        usrName:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true
        },
        profileImage:{
            type: String,
            default: "https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
        }
    }
)

const usrModel = mongoose.model("users",usrSchema)

router.get('/loggedin',async(req,res)=>{
    console.log("Signup display API is working...");
    res.send(await usrModel.find());
})

router.post('/signup',async(req,res)=>{
    console.log("Signup API working...")
    console.log("Request Body:", req.body);

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        usrName: req.body.usrName,
        email: req.body.email,
        password: req.body.password,
        profileImage: req.body.profileImage
    }

    try{
        const existingUsr = await usrModel.findOne({usrName: data.usrName});
        console.log("Request Body usrName: ", data.usrName);
        
        if(existingUsr){
            res.send("User already exits!");
        }else{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    
            data.password = hashedPassword;
    
            const usrdata = await usrModel.insertMany(data);
            console.log(usrdata);
        }
    }catch(err){
        console.log(err)
        res.status(400).json({ message: err.message });
    }
})


module.exports = router;