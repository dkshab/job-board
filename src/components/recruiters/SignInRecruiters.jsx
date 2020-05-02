import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignInRecruiters = () => {
  return (
    <div className="SignInRecruiters">
      <form>
        <fieldset>
          <legend>Sign In</legend>
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" required />{" "}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password-signin"
            name="password"
            required
          />
          <Link to={ROUTES.PASSWORD_FORGET}>
            <p>Forgot password?</p>
          </Link>
          <input type="submit" value="Sign In" />
          <p>You do not have a customer account yet?</p>
          <Link to={ROUTES.RECRUITER_SIGNUP}>
            {" "}
            <p>Register now!</p>{" "}
          </Link>
          <p>Are you a candidate?</p>
          <Link to={ROUTES.SIGNIN}>
            {" "}
            <p>Sign in here</p>{" "}
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInRecruiters;
