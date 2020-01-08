const express = require('express')
const app = express();
const port = 3000;
////////////////////////////////////////////////////////////////////////
// mongodb://superuser:superuserPa55@ds127115.mlab.com:27115/my-tunes //
////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))