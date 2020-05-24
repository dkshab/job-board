import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import NavBarAuth from "./staticComponents/NavBarAuth";
import Home from "../../sharedComponents/Home";
import Footer from "../../sharedComponents/Footer";
import JobsList from "./interaction/candidates/JobsList";
import AddJob from "./interaction/recruiters/AddJob";
import Search from "../../sharedComponents/search/Search";
import JobPage from "./interaction/candidates/JobPage";
import UserProfile from "./interaction/candidates/UserProfile";
import UpdateProfile from "./interaction/candidates/UpdateProfile";
import ServicesAuth from "./interaction/recruiters/ServicesAuth";
import About from "../../sharedComponents/About";
import RecruiterJobPage from "./interaction/recruiters/RecruiterJobPage";

const AuthApp = () => {
  return (
    <div className="AuthApp">
      <div className="wrapper">
        <NavBarAuth />
        <main className="main">
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.JOBS} component={JobsList} />
          <Route exact path={ROUTES.ADD_JOB} component={AddJob} />
          <Route exact path={ROUTES.SEARCH} component={Search} />
          <Route exact path={ROUTES.JOBPAGE} component={JobPage} />
          <Route exact path={ROUTES.PROFILE} component={UserProfile} />
          <Route exact path={ROUTES.UPDATE_PROFILE} component={UpdateProfile} />
          <Route exact path={ROUTES.RECRUITER_PAGE} component={ServicesAuth} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route
            exact
            path={ROUTES.RECRUITER_JOBPAGE}
            component={RecruiterJobPage}
          />
        </main>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default AuthApp;
