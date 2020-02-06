var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello word '+new Date());
});

app.listen(3000, function() {
    console.log('example app listening on port 3000!');
});
