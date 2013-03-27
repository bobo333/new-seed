/*
	Handlers
*/

// main index
function index(request, response) {
	console.log('sending index.html');
	response.sendfile('app/index.html');
}

// 'api/bye' get request
function bye(request, response) {
	console.log('sending bye');
	response.send('bye');
}

// declare module exports
exports.index = index;
exports.bye = bye;