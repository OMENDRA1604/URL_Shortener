const express = require('express');
const {checkforAuthentication , restrictTo} = require('../middlewares/auth');
const URL = require('../models/url');

const router = express.Router();

router.get('/admin/urls' , restrictTo(["ADMIN"]) ,async(req , res) => {
    const allURLs = await URL.find({});
    return res.render('home', {
        urls : allURLs,
    });
});

router.get('/', restrictTo(["NORMAL" , "ADMIN"]) , async(req , res)=> {
    // if(!req.user) return res.redirect('/login');
    const allURLs = await URL.find({createdBy : req.user._id});
    return res.render('home', {
        urls : allURLs,
    });
});

router.get('/signup' , (req , res) => {
    return res.render('signup');
});

router.get('/login' , (req , res) => {
    return res.render('login');
});

module.exports = router ;