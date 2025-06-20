require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function setUser(user){
    const payload = {
        _id : user._id,
        email : user.email,
        role : user.role,
    }
    return jwt.sign(payload , secret);
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error("JWT verification failed:", error.message); 
        return null;
    }
}


module.exports = {
    setUser,
    getUser,
};