const mongoose = require('mongoose');

async function connectToMongoDB(url){
    return mongoose.connect(url)
        .then(()=> console.log("MongoDB Connected!"))
        .catch((error)=> console.log(`MongoDB error : ${error}`));
}

module.exports = {
    connectToMongoDB,
};