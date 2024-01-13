const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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
        usrname:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        profileImage:{
            type: String,
            required: false,
            default: "https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
        }
    }
)

const usrModel = mongoose.model("users",usrSchema)

const roleSchema = mongoose.Schema(
    {
        role: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

router.post('/login',(req,res)=>{
    res.send("Login API working...")
})


module.exports = router;