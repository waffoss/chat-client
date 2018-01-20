import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="auth-form grid">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Login to Chat</h2>
          </div>

         <div className="form-container">
         <form>
            <div className="form-row">
            <label htmlFor="email">E-Mail</label>
              <div className="form-input">
                <input type="text" id="email" name="email" placeholder="E-Mail" />
              </div>
            </div>
            <div className="form-row">
            <label htmlFor="password">Password</label>
              <div className="form-input">
                <input type="password" id="password" name="password" placeholder="Password" />
              </div>

            </div>
            <div className="form-row">
              <input type="submit" defaultValue="Login" className="btn" />
              
            </div>
          </form>
         </div>
        </div>
      </div>
    );
  }
}

export default Login;
