const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainSchema = new Schema({
	media_userID: {
		type: Number,
		required: true
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

module.exports = mongoose.model('Main', mainSchema);
