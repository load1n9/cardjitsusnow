var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var express = require('express');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5941);
app.use('/', express.static(__dirname));
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(8000, function() {
    console.log('startings on localhost:8000');
});

var SOCKET_LIST = {};
var PLAYER_LIST = {};
class Player {
    constructor(id) {
       this.id = id,
       this.number = '' + Math.floor(10 * Math.random());
    }
}

io.sockets.on('connection', function(socket){
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;
    var player = new Player(socket.id);
    PLAYER_LIST[socket.id] = player;
    socket.on('disconnect',function(){
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
    });
});
 
setInterval(function(){
    var pack = [];
    for(var i in PLAYER_LIST){
        var player = PLAYER_LIST[i];
        pack.push({
            x:player.x,
            y:player.y,
            number:player.number
        });    
    }
    for(var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        socket.emit('newPositions',pack);
    }
   
   
   
   
},1000/25);