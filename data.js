// const express = require("express");
// const app = express();
// var path = require('path')


// app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
// app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
// app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
//
// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/Subscribe.html");
// });

//jshint esversion:6

var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/project", {useNewUrlParser: true});
mongoose.connect('mongodb+srv://admin-sahil:testmongo@cluster0.bhaa32c.mongodb.net/testDB');
var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })

var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/Subscribe.html");
})

app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;

    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted");

    });

    return res.redirect('/');
})


app.get('/',function(req,res){
// res.set({
//     'Access-control-Allow-Origin': '*'
//     });
return res.redirect('/');
}).listen(3000)


console.log("server listening at port 4000");
