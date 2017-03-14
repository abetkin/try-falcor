
var express = require('express');
var app = express();


// statically host all files in current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3001);