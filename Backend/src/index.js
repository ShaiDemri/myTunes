const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const mediaRouter = require('./router/mediaRouter');
const userRouter = require('./router/userRouter');
const errorHandler = require('./errorHandler');

const mongoURL ="mongodb://superuser:superuserPa55@ds127115.mlab.com:27115/my-tunes";

const app = express();
const port = 3030;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
let mongoDB = mongoose.connection;

mongoDB.once("open", () => {
    console.log("Successfully connected to MongoDB");
});

mongoDB.on('error', err=> {
    console.log('Mongoose default connection error: ' + err);
});

app.use('/media', mediaRouter);
app.use('/user', userRouter);
app.use(errorHandler.handleError);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))