import React, { Component } from 'react';



class Register extends Component {
  render() {
    return (
      <div className="auth-form grid">
     
          <div className="form-wrapper">

            <div className="form-header">
              <h2>Register</h2>
            </div>

            <form>
              <div className="form-row">
                <label htmlFor="email">E-Mail</label>
                <div className="form-input">
                  <input type="text" id="email" name="email" placeholder="E-Mail" />
                </div>
              </div>


              <div className="form-row">
                <label htmlFor="username">Username</label>
                <div className="form-input">
                  <input type="text" id="username" name="username" placeholder="Username" />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <div className="form-input">
                  <input type="text" id="password" name="password" placeholder="Password" />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="re-password">Repeat Password</label>
                <div className="form-input">
                  <input type="text" id="re-password" name="re-password" placeholder="Re-Password" />
                </div>
              </div>
              <div className="form-row">
                <input type="submit" defaultValue="Register" className="btn" />
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default Register;
