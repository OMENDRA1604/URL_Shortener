const { v4 : uuidv4} = require('uuid');
const User = require("../models/user")
const {setUser , getUser} = require('../service/auth');

async function handleUserSingUp(req , res){
    const { name , email , password } = req.body;
    await User.create({
        name : name,
        email : email,
        password : password,
    });

    return res.redirect('/');
}

async function handleUserLogIn(req , res){
    const {email , password } = req.body;
    const user = await User.findOne({email , password});
    if(!user){
        return res.render('login' , {
            error : "Invalid Username or password"
        });
    }

    const token = setUser(user);
    res.cookie('uid' , token);
    return res.redirect('/');
    // return res.json({ token });
}

module.exports = {
    handleUserSingUp,
    handleUserLogIn,
}