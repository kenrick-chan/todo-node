var express = require("express");
var app = express();
var port = 3000;
app.set("view engine", "ejs");

var data = []

app.get("/", function(req, res){
    data.push(req.query.todo);
    res.render("todo", {data: data});
})

app.get("/results", function(req,res){
    console.log("Results Page Hit");
    var data = req.query.todo;
})

app.listen(port, process.env.IP, function(){
    console.log("To-DO On!");
})