import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const NavBarNonAuth = () => {
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
          </li>{" "}
          <li className="item">
            <Link to={ROUTES.RECRUITER_PAGE_NON_AUTH}>Recruiters</Link>
          </li>
          &nbsp;
          <li className="item button sign-up">
            <Link to={ROUTES.SIGNIN}>Sign Up</Link>
          </li>
          &nbsp;&nbsp;
        </ul>
      </nav>
      {/* eslint-disable-next-line */}
      <a href="#nav-menu-toggle" className="backdrop" tabIndex="-1" hidden></a>
    </header>
  );
};

export default NavBarNonAuth;
