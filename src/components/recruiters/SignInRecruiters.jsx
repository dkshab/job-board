import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignInRecruiters = () => {
  return (
    <div className="SignInRecruiters">
      <form>
        <fieldset>
          <legend>Sign In</legend>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" required />
          </div>
          <div className="field">
            {" "}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password-signin"
              name="password"
              required
            />
          </div>
          <div className="field"></div>
          <p>
            <Link to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link>
          </p>
          <input type="submit" value="Sign In" />
          <div className="options">
            <p>You do not have a customer account yet?</p>
            <p>
              {" "}
              <Link to={ROUTES.RECRUITER_SIGNUP}>Register now!</Link>
            </p>
            <div className="candidate">
              {" "}
              <p>Are you a candidate?</p>{" "}
              <p>
                <Link to={ROUTES.SIGNIN}> Sign in here </Link>
              </p>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInRecruiters;
