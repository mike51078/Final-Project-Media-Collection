import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

<<<<<<< HEAD
import Navigation from './components/shared/Navigation';
import HomePage from './components/Home/Home';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
      
          <Route path="/" exact component={HomePage} />
          <Route
            path="/login"
            render={() => <LoginPage baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
       
        </main>
      </div>
    );
  }
=======
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import User from './components/Pages/User';
import Login from './components/auth/login';
import './App.css';
import Profile from './components/Pages/Profile';

//Some comments here
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
						<Navbar />
						<Route path="/" exact={true} component={Home} />
						<SecureRoute path="/User" exact={true} component={User} />
						<Route path="/login" render={() => <Login baseUrl="https://dev-711148.okta.com" />} />
						<Route path="/implicit/callback" component={ImplicitCallback} />
						<Route path="/Profile" component={Profile} />
					</div>
				</Security>
			</Router>
		);
	}
>>>>>>> master
}
