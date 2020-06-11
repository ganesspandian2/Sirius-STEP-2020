var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Welcome to Online Banking!!");
});

app.get("/accounts/:user", function(req, res){
    var users = {
        navin: "10000",
        ganesh: "20000",
        pandiyan: "30000",
    };

    var user = req.params.user.toLowerCase();
    var amount = users[user];
    res.send("Welcome!"+user + " Your Current Balance: " + amount  ); 
});

app.get("*",function (req,res) {
    res.send("Try Again!!")
});

app.listen(3000, function(){
    console.log("Running"); 
});