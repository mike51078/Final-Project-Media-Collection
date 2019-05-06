import React, { Component } from 'react';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.onChangeMovieNameInput = this.onChangeMovieNameInput.bind(this);
		this.onChangeBarCode = this.onChangeBarCode.bind(this);
		this.onChangeSearchMovieName = this.onChangeSearchMovieName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			movieNameInput: '',
			barCodeInput: '',
			searchMovieName: ''
		};
	}

	onChangeMovieNameInput(f) {
		this.setState({
			movieNameInput: f.target.value
		});
	}

	onChangeBarCode(f) {
		this.setState({
			barCodeInput: f.target.value
		});
	}

	onChangeSearchMovieName(f) {
		this.setState({
			searchMovieName: f.target.value
		});
	}

	onSubmit(f) {
		f.preventDefault();

		console.log('Form submitted:  ${this.state.movieNameInput}');
		console.log('Movie Name: ${this.state.movieNameInput}');
		console.log('Bar Code: ${this.state.barCodeInput}');

		this.setState({
			movieNameInput: '',
			barCodeInput: '',
			searchMovieName: ''
		});
	}

	render() {
		return (
			<div>
				<h1> Welcome *NAME*</h1>
				<h3>Movie Collection</h3>
				<h4>Add to Collection</h4>
				<form onSubmit={this.onSubmit}>
					<label>Movie Name: </label>
					<input
						type="text"
						className="form-control"
						id="newMovieNameInput"
						value={this.state.movieNameInput}
						onChange={this.onChangeMovieNameInput}
					/>
					<p>-OR-</p>
					<label>Barcode: </label>
					<input
						type="text"
						className="form-control"
						id="newMovieBarcodeInput"
						value={this.state.barCodeInput}
						onChange={this.onChangeBarCode}
					/>
					<button type="submit" className="btn" id="newMovieSubmitBtn">
						Submit
					</button>
					<h3>Current Movie Collection</h3>
					<label>Search By Name: </label>
					<input
						type="text"
						className="form-control"
						id="searchMovieByName"
						value={this.state.searchMovieName}
						onChange={this.onChangeSearchMovieName}
					/>
					<button className="searchMoveByNameBtn">Search</button>
					<button className="showAllMoviesBtn">Show All</button>
				</form>
			</div>
		);
	}
}

export default Profile;
