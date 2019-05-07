import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) return null;
      const authNav = this.state.authenticated ? (
        <div className="container">
          <Link className="navbar-brand" to="/">
            Do i Have this???
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/User">
                  User Portal
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li>
            <a className="nav-link"
              href="javascript:void(0)"
              onClick={() => this.props.auth.logout()}
            >
              Logout
            </a>
          </li>
            </ul>
          </div>
        </div>
 
      ) :
      
      (
       
        <div className="container">
          <Link className="navbar-brand" to="/">
            Do i Have this???
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/User">
                  User Portal
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
              </li>
           
          <li>
            <a className="nav-link"
              href="javascript:void(0)"
              onClick={() => this.props.auth.login()}
            >
              Login
            </a>
          </li>
          <li>
            <Link className="nav-link" to="/register">Register</Link>
          </li>
            </ul>
          </div>
        </div>
     
      );
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">

          
          
            {authNav}
         
        </nav>
      );
    }
  }
);