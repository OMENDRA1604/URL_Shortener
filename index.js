require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const {connectToMongoDB} = require('./connect');
const {checkforAuthentication , restrictTo} = require('./middlewares/auth');
const URL = require('./models/url');

const UrlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const app = express();
const PORT = process.env.PORT;

connectToMongoDB(process.env.MONGO_URL);

app.set('view engine' , 'ejs');
app.set('views' , path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(checkforAuthentication);


app.use('/url' , restrictTo(["NORMAL" , "ADMIN"])  , UrlRoute);
app.use('/user' , userRoute);
app.use('/' , staticRoute);


app.listen(PORT , () => console.log("Server started at PORT :" ,PORT))