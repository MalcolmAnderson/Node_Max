const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/');

app.use((req, res, next)=>{
    res.status(404).send('<h1>404</h1>');
})

app.listen(3000);