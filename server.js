
var express = require('express'); //connecting the express module
var app = express();              //creating an express application instance
var serv = require('http').Server(app); //adding an express app as an http server

app.get('/', function (req, res) { //processing a get request
    res.sendFile(__dirname + '/client/index.html'); //issuing a file to a get request
});

app.use('/client', express.static(__dirname + '/client')); //installing used files

serv.listen(2000); //start listening on port 2000

var io = require('socket.io')(serv, {});

io.sockets.on('connection', function (socket) { //connecting sockets
    console.log('socket connection');

    /*
     * receiving data from the client side of the application
    socket.on('happy', function (data) {
        console.log(data.reason);
    });*/

    /*
     * sending data to the client side of the application
    socket.emit('serverMsg', {
        msg: 'Hello'
    });
    */

});