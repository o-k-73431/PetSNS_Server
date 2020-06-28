
const app = require('express')();

//=========================================================
// Basic settings
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
//=========================================================


//=========================================================
// Router setup
const mainRouter = require('./routes/main');
const signinRouter = require('./routes/signin');
const signupRouter = require('./routes/signup');

app.use('/api/main/', mainRouter);
app.use('/api/', signinRouter);
app.use('/api/signup/', signupRouter);
//=========================================================


app.listen(3001);
module.exports = app;