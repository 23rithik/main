const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./DB/mongoDb');

const app = express();
app.use(express.json());
app.use(cors());

const authRouter = require('./Routers/authRouter');
const projectRouter = require('./Routers/projectRouter');
const referenceRouter = require('./Routers/referenceRouter');
const forumRouter = require('./Routers/forumRouter');
const submitRouter = require('./Routers/Postroutes');

app.use('/', authRouter);
app.use('/', projectRouter);
app.use('/', referenceRouter);
app.use('/', forumRouter);
// app.use('/', submitRouter);


app.use('/', submitRouter);

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../Frontend/index.html'));
// });

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
