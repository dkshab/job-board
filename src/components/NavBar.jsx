import React from "react";
import { Link } from "react-router-dom";

import { signOut } from "../firebase";

import * as ROUTES from "../constants/routes";

const NavBar = () => {
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
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li className="item">
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li className="item">
            <Link to={ROUTES.JOBS}>Jobs</Link>
          </li>
          <li className="item">
            <Link to={ROUTES.SEARCH}>Search</Link>
          </li>
          <li className="item">
            <Link to={ROUTES.LANDING}>Contact</Link>
          </li>
          <li className="item button post-job">
            <Link to={ROUTES.ADD_JOB}>Post a Job</Link>
          </li>
          &nbsp;
          <li className="item button sign-up">
            <Link to={ROUTES.SIGNIN}>Sign Up</Link>
          </li>
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
