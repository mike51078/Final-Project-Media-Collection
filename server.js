const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongojs = require('mongojs');
const cors = require('cors');
const mediaRoutes = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let main = require('./models/main');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/media_db', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
	console.log('MongoDB database connection established successfully');
});

app.use('/media_db', mediaRoutes);

mediaRoutes.route('/').get(function(req, res) {
	main.find(function(err, media_db) {
		if (err) {
			console.log(err);
		} else {
			res.json(media_db);
		}
	});
});

mediaRoutes.route('/:id').get(function(req, res) {
	let id = req.params.id;
	main.findById(id, function(err, todo) {
		res.json(main);
	});
});

mediaRoutes.route('/update/:id').post(function(req, res) {
	Main.findById(req.params.id, function(err, todo) {
		if (!main) res.status(404).send('data is not found');
		else main.media_userID = req.body.media_userID;
		main.media_movieName = req.body.media_movieName;
		main.media_moviePoster = req.body.media_moviePoster;
		main.media_moveGenre = req.body.media_moveGenre;

		main
			.save()
			.then((main) => {
				res.json('Main table updated!');
			})
			.catch((err) => {
				res.status(400).send('Update not possible, please try again');
			});
	});
});

mediaRoutes.route('/add').post(function(req, res) {
	let main = new Main(req.body);
	main
		.save()
		.then((main) => {
			res.status(200).json({ main: 'Main updated successfully!' });
		})
		.catch((err) => {
			res.status(400).send('Adding new media failed, please try again.');
		});
});

app.use('/media_db', mediaRoutes);

// var databaseUrl = 'media_db';
// var collections = [ 'main' ];

// var db = mongojs(databaseUrl, collections);

// db.on('error', function(error) {
// 	console.log('Database Error:', error);
// });

// app.post('/add', function(req, res) {
// 	db.main.insert(function(err, added) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(added);
// 		}
// 	});
// });

// app.get('/', function(req, res) {
// 	res.send('Hello World!');
// });

// app.get('/all', function(req, res) {
// 	db.main.find._addSpecial('$orderby', { name: 1 }, function(err, found) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(found);
// 		}
// 	});
// });

// app.get('/byName', function(req, res) {
// 	db.main.find({ query: { name: name } }, function(err, found) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(found);
// 		}
// 	});
// });

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
