import React from "react";

const NavBar = () => {
  return (
    <header className="NavBar">
      <div className="row">
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
          <h1>jobHunt.io</h1>
        </div>
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
            <a href="/">Home</a>
          </li>
          <li className="item">
            <a href="/">About</a>
          </li>
          <li className="item">
            <a href="/">Blog</a>
          </li>
          <li className="item">
            <a href="/">Contact</a>
          </li>
          <li className="item button">
            <a href="/">Post a Job</a>
          </li>
          <li className="item button-secondary">
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </nav>
      <a href="#nav-menu-toggle" className="backdrop" tabIndex="-1" hidden></a>
    </header>
  );
};

export default NavBar;
