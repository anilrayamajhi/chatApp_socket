var
  app = require('express')(),
  http = require('http').Server(app);

var port = (process.env.PORT || 7001);

app.get('/', function(req, res) {
  // res.sendfile('index.html'); inthis case same as
  res.sendFile('/index.html', {root: __dirname});

});

//Socket Code

http.listen(port, function(){
  console.log(`🔥🔥🔥 Firing up server at PORT: ${port}`);
});
