const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27018/restapingopas",{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).json("Hallooo");
})
app.use('/api',require('./Routers/MansuiaReq'));

app.listen(process.env.port || 8080,(req,res)=>{
    console.log("Hallo server sudah berjalan di port 8080");
})

