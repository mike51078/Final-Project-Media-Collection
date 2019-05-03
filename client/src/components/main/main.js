import React, { Component } from 'react';

class Main extends Component {
	render() {
		return (
			<div>
				<h1>Media Collection</h1>
				<ul className="header">
					<li>
						<a href="/home/">Home</a>
					</li>
					<li>
						<a href="/profile/">Profile</a>
					</li>
					<li>
						<a href="/contact/">Contact</a>
					</li>
				</ul>
				<div className="content" />
			</div>
		);
	}
}

export default Main;
