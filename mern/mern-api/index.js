const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

app.use(bodyParser.json())

// mengatsi err cors ORIGIN
app.use((req, res, next) => {
    res.setHeader('Access-Control_Allow-Origin', '*');
    res.setHeader('Access-Control_Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTION');
    res.setHeader('Access-Control_Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({message: message, data: data});
})

mongoose.connect('mongodb+srv://mujirahman:JWOhKISI36dfv3yo@cluster0.h7zqn.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(() => {
    app.listen(4000, ()=> console.log('connection success'));
})
.catch(err => console.log('isi error', err));
