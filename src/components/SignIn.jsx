import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { signInWithGoogle, auth } from "../firebase";
import * as ROUTES from "../constants/routes";

class SignIn extends Component {
  state = { email: "", password: "" };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.setState({ email: "", password: "" }, () => {
          console.log(response);
        });
      })
      .then(() => {
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="SignIn">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign In</legend>
            <div className="field">
              {" "}
              <label htmlFor="email">Email</label>{" "}
              <input
                type="email"
                id="email-signin"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password-signin"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="buttons">
              <button className="signin" type="submit">
                Sign In
              </button>
              <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
