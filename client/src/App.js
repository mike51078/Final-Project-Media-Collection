import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navigation from './components/shared/Navigation';
import HomePage from './components/Home/home';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navigation />
					<main>
						<Route path="/" exact component={HomePage} />
						<Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
						<Route path="/implicit/callback" component={ImplicitCallback} />
						<Route path="/register" component={RegistrationForm} />
						<SecureRoute path="/profile" component={ProfilePage} />
					</main>
				</div>
			</Router>
		);
	}
}
