import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { signOut } from "../../../utilities/firebase";
import { UserContext } from "../../../providers/UserProvider";

import * as ROUTES from "../../../constants/routes";

const NavBar = () => {
  const user = useContext(UserContext);
  const isRecruiter = user.roles === "recruiter" ? true : false;
  console.log("Am I a recruiter? ", isRecruiter);

  return (
    <header className="NavBar">
      <a
        href="#nav-menu"
        id="nav-menu-toggle"
        className="nav-toggle"
        aria-label="Open nav menu"
      >
        <span className="sr-only">Open nav menu</span>
        <span className="fa fa-bars" aria-hidden="true"></span>
      </a>
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <h1>jobHunt.io</h1>
        </Link>
      </div>
      <nav id="nav-menu" className="nav-menu" aria-label="Nav menu">
        <a
          href="#nav-menu-toggle"
          id="nav-menu-close"
          className="nav-close"
          aria-label="Close nav menu"
        >
          <span className="sr-only">Close nav menu</span>
          <span className="fa fa-close" aria-hidden="true"></span>
        </a>
        <ul className="NavBar--menu">
          <li className="item">
            <Link to={ROUTES.JOBS}>Jobs</Link>
          </li>
          {!isRecruiter && (
            <>
              <li className="item">
                <Link to={ROUTES.ACCOUNT_CANDIDATES}>Account</Link>
              </li>
              <li className="item">
                <Link to={ROUTES.PROFILE}>Profile</Link>
              </li>
            </>
          )}
          {isRecruiter && (
            <>
              <li className="item">
                <Link to={ROUTES.RECRUITER_PAGE}>Recruiters</Link>
              </li>
              <li className="item">
                <Link to={ROUTES.ACCOUNT_RECRUITERS}>Account</Link>
              </li>
              <li className="item button post-job">
                <Link to={ROUTES.ADD_JOB}>Post a Job</Link>
              </li>
            </>
          )}
          &nbsp;
          <li className="item">
            <button onClick={signOut} className="button sign-out">
              Sign Out
            </button>
          </li>
          &nbsp;&nbsp;
        </ul>
      </nav>
      {/* eslint-disable-next-line */}
      <a href="#nav-menu-toggle" className="backdrop" tabIndex="-1" hidden></a>
    </header>
  );
};

export default NavBar;
