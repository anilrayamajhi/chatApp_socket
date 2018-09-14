CHAT APP WITH SOCKET
-

> Fork/Clone Repo

	git clone git@github.com:anilrayamajhi/chatApp_socket.git
	
> Install dependencies

	cd start
	npm i
	
> Fire Up the server

	nodemon 
	node server.js
		
> **Feel to change git remote origin url in order to push the app to your github.**
		
		
---
**TUTORIAL**

***Server***

> Start by installing socket.io

	npm i -S socket.io
	
> Require package in server.js and mount it with `HTTP server (object)` mounted with an instance of express `Web application framework for Nodejs`

	socketIO = require('socket.io'),
	socketServer = socketIO(http);
	
> socketServer Connection. Incoming sockets
		
	socketServer.on('connection', function(socket){
  		console.log('A client connected');
 	})
 	
> Client leaves Session. Disconnect event.

	socketServer.on('connection', function(socket){
	  console.log('A client connected');
	  
	    socket.on('disconnect', function(socket){
	      console.log('A client is disconnected');
	    });
	})
	
> Setup server to receive and dispatch object. String in this case. `chat message` event identifier, `.emit` event to boradcast or dispatch.

	socketServer.on('connection', function(socket){
	  console.log('A client connected');
	
	    socket.on('chat message', function(phrase){
	      socketServer.emit('finish', phrase);
	    })
	    


***Client***

> We can stick with npm to implement socket at client end by the use of module bundlers **awesome** Webpack; however here we are concentrated more on how to quickly up an run with simle chat just to understand the architecture. Html skeleton with vary minimal design with bootstrap and jQuery is already included in the start boilerplate. Feel free to make it hip. 
> 
> Start by connecting socket at front end.

	<script src="/socket.io/socket.io.js"></script>
	
> Instance of socket Client.

	var socket = io();
	
> Submit button click event listener.

	$('button').on('click', function(){
        submit();
      });
      
	function submit (){
          }
          
> Like server, event to listen and dispatcher for front end.

		var form = $('.form');
		
		...
		
		socket.on('finish', function(phrase){
	        $('p').prepend(`<div class="well" style="width:100%">${phrase}</div><br />`)
      		});
      	
      	...	

      function submit (){
        socket.emit('chat message', form.val());
        form.val('');
        return false;
  			}
  			
---
DONE  🤘🏿
-

**Credits:**

[Socket.IO](https://socket.io/)
