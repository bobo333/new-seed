// initial values
var port = 1337;

// include dependencies
var express = require('express');
var handlers = require('./node/handlers');

// start app
var app = express();

// configuration
// set static file path
app.use(express.static(__dirname + '/app'));

// routing
app.get('/api/goodbye', handlers.bye);
app.get('*', handlers.index);

// listen on port specified
app.listen(port);
console.log('Listening on port %d.', port);