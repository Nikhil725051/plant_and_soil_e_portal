const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/User');
const plantRouter = require('./routes/Plant');
const articleRouter = require('./routes/Article');
const quizRouter = require('./routes/Quiz');
const videoRouter = require('./routes/Video');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());

//Initial connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connection to the database is successfull!');
})
.catch((err) => {
    console.log(err)
});

//Handle errors after initial connection was established

mongoose.connection.on('err', (err) => {
    console.log(err);
});

mongoose.connection.on('connected', () => {
    console.log('Connected to DB succesfully!')
});

app.use(express.json({limit: 52428800}));

app.use('/auth', userRouter);
app.use('/plant', plantRouter);
app.use('/article', articleRouter);
app.use('/quiz', quizRouter);
app.use('/video', videoRouter);

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMess = err.message || 'Some error occured';
    res.setHeader('Content-Type', 'application/json');
    res.status(errStatus);
    return res.json({
        status: false,
        status: errStatus,
        message: errMess,
        stack: err.stack
    })
})

app.listen(8080, () => {
    console.log('Server connected successfully!');
})