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

const usrModel = mongoose.model("user",usrSchema)

router.get("/display",async(req,res)=>{
    console.log("display API getting hit...");
    const data = await usrModel.find({})
    res.send(data);
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

router.post("/loggedin",async(req,res)=>{
    console.log("loggedin API is working...");
    try{
        const check = await usrModel.findOne({usrName: req.body.usrName});
        if(!check){
            res.send("User not found...");
        }
        else{
            const passwordMatch = await bcrypt.compare(req.body.password, check.password);
            if(passwordMatch){
                res.redirect("http://localhost:4200/display");
            }else{
                res.send("Incorrect password!")
            }
        }
    }catch{
        res.send("Incorrect details passed...")
    }
})


module.exports = router;