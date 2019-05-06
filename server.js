const user = require ("./api/routes/users")
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongojs = require('mongojs');

var databaseUrl = 'final_db';
var collections = [ 'profile', 'movies' ];

var db = mongojs(databaseUrl, collections);

db.on('error', function(error) {
	console.log('Database Error:', error);
});

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/all', function(req, res) {
	db.final_db.find({}, function(err, found) {
		if (err) {
			console.log(err);
		} else {
			res.json(found);
		}
	});
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});
app.use(user)

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
