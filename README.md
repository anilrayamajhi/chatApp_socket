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
**Tutorial**
> Start by installing socket.io

	npm i -S socket.io
	
> Require package in server.js and mount it with `http: hypertext transfer protocol` provided by express `Web application framework for Nodejs`

	socketIO = require('socket.io'),
	socketServer = socketIO(http);
	
