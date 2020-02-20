var express = require("express");
var app = express();
var body = require("body-parser");

app.use(body.urlencoded({extended: true}))

var friends = []
app.set("view engine", "ejs")

//routes

app.get("/", function(req,res){
    res.render("home");
})

app.get("/friends", function(req,res){
    
    res.render("friends", {friends:friends});
});

app.post("/addfriend", function(req,res){
    var newFriend = req.body.addfriend
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(3000, process.env.IP, function(){
    console.log("started");
});