import React from "react";

const Home = () => {
  return (
    <div className="Home">
      Homepage
      <hr />
      <section>
        <div className="Home--row">
          <a href="#test-menu" id="test-toggle" className="test-toggle">
            <span className="sr-only">Open nav menu</span>
            <span className="fa fa-bars" aria-hidden="true"></span>
          </a>
          <div className="Home--brand">
            <h1>Test jobHunt.io</h1>
          </div>
          <nav id="test-menu" className="test-menu">
            <a href="#test-toggle" id="test-close" className="test-close">
              <span className="sr-only">Close nav menu</span>
              <span className="fa fa-close" aria-hidden="true"></span>
            </a>
            <ul>
              <li>
                <a href="/"> About</a>
              </li>
              <li>
                <a href="/"> Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Post a Job</a>
              </li>
              <li>
                <a href="/">Sign In</a>
              </li>
            </ul>
          </nav>
          <a
            href="#test-toggle"
            className="test-backdrop"
            tabIndex="-1"
            hidden
          ></a>
        </div>
      </section>
    </div>
  );
};

export default Home;
