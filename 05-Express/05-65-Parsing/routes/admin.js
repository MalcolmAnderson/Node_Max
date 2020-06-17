const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("In the users middleware!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="Submit">Add Product</button></input></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;