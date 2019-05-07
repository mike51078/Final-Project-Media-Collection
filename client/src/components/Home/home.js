import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the Do I have It User portal,{' '}
            <Link to="/User">click here</Link>
          </p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
            Sign in or Register for your personal portal
          </p>
          <button>
          <Link className="nav-link" to="/login">Login</Link>
          </button>
          <button>
          <Link className="nav-link" to="/register">Register</Link>
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">Do I have It User Portal</h1>
          {mainContent}
        </div>
      );
    }
  }
);