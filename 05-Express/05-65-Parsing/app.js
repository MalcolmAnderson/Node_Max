const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const userShop = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));


app.use('/admin', adminRoutes);
app.use(userShop);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3000); 
