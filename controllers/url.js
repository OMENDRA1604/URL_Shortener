const URL = require('../models/url');
const shortid = require('shortid');

async function handleGenerateNewShortUrl (req , res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({ error : 'URL is required'});
    }
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitedHistory : [],
        createdBy : req.user._id,
    });
    return res.render("home" , {
        id : shortID,
    });
}

async function handleRedirectRoute(req , res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push : {
        visitHistory : {
            timestamp: Date.now()
            },
        },
    });
    if (!entry) {
        return res.status(404).send("Short URL not found");
    }
    const fullUrl = entry.redirectURL.startsWith("http")
        ? entry.redirectURL
        : `https://${entry.redirectURL}`;

    res.redirect(fullUrl);
}

async function handleGetAnalytics(req , res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        Total_clicks : result.visitHistory.length , 
        Analytics : result.visitHistory,
    });
}


module.exports = {
    handleGenerateNewShortUrl,
    handleRedirectRoute,
    handleGetAnalytics,
}