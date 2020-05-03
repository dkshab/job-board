import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignUpRecruiters = () => {
  return (
    <div className="SignUpRecruiters">
      <form>
        <fieldset>
          <legend>Sign Up</legend>
          <p>
            Already have an account?{" "}
            <Link to={ROUTES.RECRUITER_SIGNIN}>Sign In now!</Link>{" "}
          </p>
          <div className="title">
            <p>
              {" "}
              <span>for recruiters</span> Personal Details
            </p>
          </div>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="field">
            {" "}
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" />
          </div>
          <div className="field">
            {" "}
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="field">
            {" "}
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" />
          </div>
          <div className="field">
            {" "}
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" />
          </div>
          <input type="submit" value="Create account" />
          <p className="terms">
            By signing up I agree to <Link to={ROUTES.HOME}>Terms</Link> and{" "}
            <Link to={ROUTES.HOME}>Privacy Policy</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpRecruiters;
