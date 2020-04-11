import React from "react";
import { Route } from "react-router-dom";

import "../sass/styles.scss";

import * as ROUTES from "../constants/routes";

import NavBar from "../components/NavBar";
import Home from "../components/Home";
import SignInAndSignUp from "../components/SignInAndSignUp";

const Application = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="main">
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Application;
