var
  app = require('express')(),
  http = require('http').Server(app),
  socketIO = require('socket.io'),
  socketServer = socketIO(http);

var port = (process.env.PORT || 666);

app.get('/', function(req, res) {
  // res.sendfile('index.html'); inthis case same as
  res.sendFile('/index.html', {root: __dirname});

});

socketServer.on('connection', function(socket){
  console.log('A client connected');

    socket.on('chat message', function(phrase){
      socketServer.emit('finish', phrase);
    })


    socket.on('disconnect', function(socket){
      console.log('A client is disconnected');
    });
})

http.listen(port, function(){
  console.log(`🔥🔥🔥 Firing up server at PORT: ${port}`);
});
