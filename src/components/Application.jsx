import React from "react";

import "../sass/styles.scss";
import NavBar from "./NavBar";
import Home from "./Home";

const Application = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="main">
        <h1>Job Search App!</h1>
        <Home />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Application;
