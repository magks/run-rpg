var express = require('express');
var app     = express();
var serv    = require('http').Server(app);

app.get('/', function(req,res) {
    res.sendFile(_dirname + '/client/index.html');
});
app.use('/client',express.static(_dirname + '/client'));

serv.listen(7777);