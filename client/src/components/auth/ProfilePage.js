import React from 'react';
import { withAuth } from '@okta/okta-react';

export default withAuth(
	class ProfilePage extends React.Component {
		constructor(props) {
			super(props);
			this.state = { user: null };
			this.getCurrentUser = this.getCurrentUser.bind(this);

			this.onChangeMovieNameInput = this.onChangeMovieNameInput.bind(this);
			this.onChangeBarCode = this.onChangeBarCode.bind(this);
			this.onChangeSearchMovieName = this.onChangeSearchMovieName.bind(this);
			this.onSubmit = this.onSubmit.bind(this);

			this.state = {
				movieNameInput: '',
				barCodeInput: '',
				searchMovieName: '',
				currentUserName: ''
			};
		}

		async getCurrentUser() {
			this.props.auth.getUser().then((user) => this.setState({ user }));
		}

		componentDidMount() {
			this.getCurrentUser();
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

			this.setState({
				movieNameInput: '',
				barCodeInput: '',
				searchMovieName: ''
			});
		}

		render() {
			if (!this.state.user) return null;
			return (
				<section className="user-profile">
					<div>
						<h1>
							<label>Welcome</label>
							<span>{' ' + this.state.user.name}</span>
						</h1>
					</div>

					<form onSubmit={this.onSubmit}>
						<div className="card">
							<div className="card-header">Movie Collection</div>
							<div className="card-body">
								<div className="card">
									<div className="card-header">Add to Collection</div>
									<div className="card-body">
										<div>
											<label>Movie Name</label>
											<input
												type="text"
												className="form-control"
												id="newMovieNameInput"
												value="Movie Name"
												value={this.state.movieNameInput}
												onChange={this.onChangeMovieNameInput}
											/>
										</div>
										<p> - OR -</p>
										<div>
											<label>Barcode</label>
											<input
												type="text"
												className="form-control"
												id="newMovieBarcodeInput"
												value="Bar Code"
												value={this.state.barCodeInput}
												onChange={this.onChangeBarCode}
											/>
										</div>
										<button type="submit" className="btn btn-light btn-lg" id="newMovieSubmitBtn">
											Submit
										</button>
									</div>
								</div>
								<div className="card">
									<div className="card-header">Search By Name</div>
									<div className="card-body">
										<div>
											<input
												type="text"
												className="form-control"
												id="searchMovieByName"
												value="Enter Movie Name"
												value={this.state.searchMovieName}
												onChange={this.onChangeSearchMovieName}
											/>
											<button className="btn btn-light btn-lg" id="searchMoveByNameBtn">
												Search
											</button>
										</div>
										<div>
											<button className="btn btn-light btn-lg" id="showAllMoviesBtn">
												Show All
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>

					{/* <div>
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
							<button type="submit" className="btn btn-light btn-lg" id="newMovieSubmitBtn">
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
							<button className="btn btn-light btn-lg" id="searchMoveByNameBtn">
								Search
							</button>
							<button className="btn btn-light btn-lg" id="showAllMoviesBtn">
								Show All
							</button>
						</form>
					</div> */}
				</section>
			);
		}
	}
);
