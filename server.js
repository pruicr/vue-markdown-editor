var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

// app.use(express.static(__dirname + '/'));

app.all('*', function(req, res, next) {
	res.sendFile('/index.html', {root: __dirname});
});

app.listen(port, function() {
	console.log('Listening on port ' + port);
});