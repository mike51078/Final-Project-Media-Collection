import axios from 'axios';

export default {
	// Gets movies from the
	getMovies: function(q) {
		return axios.get('/api/google', { params: { q: 'title:' + q } });
	},
	// Gets all saved movies
	getSavedMovies: function() {
		return axios.get('/api/movies');
	},
	// Deletes the saved movie with the given id
	deleteMovie: function(id) {
		return axios.delete('/api/movies/' + id);
	},
	// Saves a movie to the database
	saveMovie: function(movieData) {
		return axios.post('/api/books', movieData);
	}
};
