var express = require('express');
var controller = require('./controller/controller');

var app = express();

controller(app);

//listen to port
app.listen(2000);
console.log("You are listening to port 2000");

