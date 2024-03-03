// Create web server
// 1. Load express module
// 2. Create express application
// 3. Create a route for get method
// 4. Create a route for post method
// 5. Create a route for put method
// 6. Create a route for delete method
// 7. Start server
// 8. Test server

// 1. Load express module
var express = require('express');
var bodyParser = require('body-parser');

// 2. Create express application
var app = express();

// 3. Create a route for get method
app.get('/comments', function(req, res) {
    console.log('GET request');
    res.send('GET request');
});

// 4. Create a route for post method
app.post('/comments', function(req, res) {
    console.log('POST request');
    res.send('POST request');
});

// 5. Create a route for put method
app.put('/comments', function(req, res) {
    console.log('PUT request');
    res.send('PUT request');
});

// 6. Create a route for delete method
app.delete('/comments', function(req, res) {
    console.log('DELETE request');
    res.send('DELETE request');
});

// 7. Start server
var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:' + server.address().port);
});

// 8. Test server
// Open a web browser and go to http://localhost:3000/comments
// Open a terminal and run the following command: curl -X POST http://localhost:3000/comments
// Open a terminal and run the following command: curl -X PUT http://localhost:3000/comments
// Open a terminal and run the following command: curl -X DELETE http://localhost:3000/comments
// Open a terminal and run the following command: curl -X GET http://localhost:3000/comments
// Open a terminal and run the following command: curl -X GET http://localhost:3000/comments/123
// Open a terminal and run the following command: curl -X POST http://localhost:3000/comments/123
// Open a terminal and run the following command: curl -X PUT http://localhost:3000/comments/123
// Open a terminal and run the following command: curl -X DELETE http://localhost:3000/comments