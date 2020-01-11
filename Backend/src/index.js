const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mediaRouter = require('./router/mediaRouter');
const userRouter = require('./router/userRouter');

////////////////////////////////////////////////////////////////////////
// mongodb://superuser:superuserPa55@ds127115.mlab.com:27115/my-tunes //
////////////////////////////////////////////////////////////////////////

const app = express();
const port = 3030;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use('/media', mediaRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))