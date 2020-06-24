const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("in the root");
    res.send('<h1>Hello</h1>');
})