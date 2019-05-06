const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongojs = require('mongojs');

var databaseUrl = 'media_db';
var collections = [ 'main' ];

var db = mongojs(databaseUrl, collections);

db.on('error', function(error) {
	console.log('Database Error:', error);
});

app.post('/add', function(req, res) {
	db.main.insert(function(err, added) {
		if (err) {
			console.log(err);
		} else {
			res.json(added);
		}
	});
});

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/all', function(req, res) {
	db.main.find._addSpecial('$orderby', { name: 1 }, function(err, found) {
		if (err) {
			console.log(err);
		} else {
			res.json(found);
		}
	});
});

app.get('/byName', function(req, res) {
	db.main.find({ query: { name: name } }, function(err, found) {
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

// app.get('*', function(req, res) {
// 	res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
