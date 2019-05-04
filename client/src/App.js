import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import User from './components/Pages/User';
import Login from './components/auth/login';
import './App.css';
import Profile from './components/profile/profile';

function onAuthRequired({ history }) {
	history.push('/login');
}

class App extends Component {
	render() {
		return (
			<Router>
				<Security
					issuer="https://dev-711148.okta.com/oauth2/default"
					client_id="0oaixp18gjbAOIwSD356"
					redirect_uri={window.location.origin + '/implicit/callback'}
					onAuthRequired={onAuthRequired}
				>
					<div className="App">
						<Navbar />.
						<Route path="/" exact={true} component={Home} />
						<SecureRoute path="/User" exact={true} component={User} />
						<Route path="/login" render={() => <Login baseUrl="https://dev-711148.okta.com" />} />
						<Route path="/implicit/callback" component={ImplicitCallback} />
					</div>
				</Security>
			</Router>
		);
	}
}

export default App;
