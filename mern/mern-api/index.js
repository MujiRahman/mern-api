const express = require('express');
const bodyParser = require('body-parser');

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

app.use('/v1/auth', authRoutes)
app.use('/v1/blog', blogRoutes)

app.listen(4000);