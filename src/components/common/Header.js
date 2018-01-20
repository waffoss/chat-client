import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Header extends Component {
 

  render() {
    return (
      <div className="container">
        <nav>
          <NavLink exact to='/' className="nav-link" activeClassName="nav-link-active">Home</NavLink>
          <NavLink to='/login' className="nav-link" activeClassName="nav-link-active">Login</NavLink>
          <NavLink to='/register' className="nav-link" activeClassName="nav-link-active">Register</NavLink>
          <NavLink to='/chat/all' className="nav-link" activeClassName="nav-link-active">Chat</NavLink>
          <a onClick={this.props.logOut}>Logout</a>
        </nav>
      </div>
    );
  }
}

export default Header;
