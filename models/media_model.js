const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Media = new Schema({
	media_userID: {
		type: Number
	},
	media_movieName: {
		type: String
	},
	media_moviePoster: {
		type: String
	},
	media_moveGenre: {
		type: String
	}
});

module.exports = mongoose.model('Media', Media);
