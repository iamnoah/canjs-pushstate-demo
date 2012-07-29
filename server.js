#!/usr/bin/env node
var express = require('express'),
	fs = require('fs'),
    index;

fs.readFile('./can/route/pushstate/demo.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});

var app = express.createServer();

app.listen(1337);
app.use(express['static'](__dirname));

app.get(/\/demo\/(.*)/, function(req, res){
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(index);
    res.end();
});

console.log("Open http://localhost:1337/demo/ for the pushstate demo.");
