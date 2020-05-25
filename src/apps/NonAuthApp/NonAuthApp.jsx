import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import NavBarNonAuth from "./staticComponents/NavBarNonAuth";

import SignInAndSignUp from "./interaction/candidates/SignInAndSignUp";

import SignInRecruiters from "./interaction/recruiters/SignInRecruiters";
import SignUpRecruiters from "./interaction/recruiters/SignUpRecruiters";
import AboutNonAuth from "./staticComponents/AboutNonAuth";
import FooterNonAuth from "./staticComponents/FooterNonAuth";
import HomeNonAuth from "./staticComponents/HomeNonAuth";

const AuthApp = () => {
  return (
    <div className="NonAuthApp">
      <div className="wrapper">
        <NavBarNonAuth />
        <main className="main">
          <Route exact path={ROUTES.HOME} component={HomeNonAuth} />
          <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
          <Route exact path={ROUTES.ABOUT} component={AboutNonAuth} />

          <Route
            exact
            path={ROUTES.RECRUITER_SIGNIN}
            component={SignInRecruiters}
          />
          <Route
            exact
            path={ROUTES.RECRUITER_SIGNUP}
            component={SignUpRecruiters}
          />
        </main>
        <footer className="footer">
          <FooterNonAuth />
        </footer>
      </div>
    </div>
  );
};

export default AuthApp;
