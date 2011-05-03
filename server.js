var express = require('express'),
		server	=	express.createServer();

server.get('/', function(req, res) {
	res.send('You find yourself staring at an empty wall.', {'Content-Type': 'text/plain'});
});

server.listen(8000);
