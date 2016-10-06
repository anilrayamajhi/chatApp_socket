var
  app = require('express')(),
  http = require('http').Server(app),
  socketIO = require('socket.io'),
  socketServer = socketIO(http);

var port = (process.env.PORT || 3000);

app.get('/', function(req, res) {
  // res.sendfile('index.html'); inthis case same as
  res.sendFile('/index.html', {root: __dirname});

});

socketServer.on('connection', function(socket){
  console.log('A client connected');

    socket.on('mexico', function(phrase){
        console.log(phrase);
        socket.emit('mex-res', 'Igot your message');
    })

    socket.on('chat message', function(phrase){
      socketServer.emit('finish', phrase);
    })


    socket.on('disconnect', function(socekt){
      console.log('A client is disconnected');
    });
})

http.listen(port, function(){
  console.log(`Server start end on port: ${port}`);
});
