import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div>
				<h1> Welcome *NAME*</h1>
				<h3>Movie Collection</h3>
				<h4>Add to Collection</h4>
				<input className="newMovieNameInput">Movie Name</input>
				<p>-OR-</p>
				<input className="newMovieBarcodeInput">Barcode</input>
				<button className="newMovieSubmitBtn">Submit</button>
				<h3>Current Movie Collection</h3>
				<input className="searchMovieByName">Search By Name</input>
				<button className="searchMoveByNameBtn">Search</button>
				<button className="showAllMoviesBtn">Show All</button>
			</div>
		);
	}
}

export default Profile;
