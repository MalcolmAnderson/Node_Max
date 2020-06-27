const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("in the root");
    res.sendFile(path.join(__dirname, '..', "views", 'index.html'));
    // res.send('<h1>Route 1</h1>');
})

router.get('/users', (req, res, next) => {
    console.log("in users");
    res.sendFile(path.join(__dirname, '..', "views", 'users.html'));
    // res.send('<h1>Route 2</h1>');
})

module.exports = router;