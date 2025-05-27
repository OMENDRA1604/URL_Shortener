const express = require('express');
const { 
    handleGenerateNewShortUrl,
    handleRedirectRoute,
    handleGetAnalytics,
    } = require('../controllers/url');

const router = express.Router();


router.post("/" , handleGenerateNewShortUrl);
router.get('/analytics/:shortId' , handleGetAnalytics);
router.get('/:shortId' , handleRedirectRoute);


module.exports = router ;