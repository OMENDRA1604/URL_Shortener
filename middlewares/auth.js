const {getUser}  = require('../service/auth');

function checkforAuthentication(req , res , next){
    const tokenCookie = req.cookies?.uid;
    req.user = null;
    if (!tokenCookie) return next();
    
    const token = tokenCookie;
    const user = getUser(token);

    req.user = user ;
    return next();
}

function restrictTo(roles = []){
    return function (req , res , next){
        if(!req.user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) return res.end('UnAuthorized');

        return next();
    };
}


// async function restrictToLoggedInUserOnly(req , res , next){
//     // const userid = req.cookies?.uid;
//     const userid = req.headers["authorization"];
//     if(!userid){
//         return res.redirect('/login');
//     }

//     const token = userid.split("Bearer ")[1];
//     const user = getUser(token);

//     if(!user){
//         return res.redirect('/login');
//     }

//     req.user = user;
//     next();
// }

// async function checkAuth(req , res , next){
//     // const userid = req.cookies?.uid;
//     const userid = req.headers["authorization"];
//     const token = userid.split("Bearer ")[1];
    
//     const user = getUser(token);

//     req.user = user;
//     next();
// }

module.exports = {
    // restrictToLoggedInUserOnly,
    // checkAuth,
    checkforAuthentication,
    restrictTo, 
};