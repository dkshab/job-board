import React from "react";
import NavBarRecruiter from "./NavBarRecruiter";
import RecruiterSignUp from "../../components/RecruiterSignUp";
import Services from "../../components/Services";

const RecruiterApp = () => {
  return (
    <div className="Recruiter--wrapper">
      <NavBarRecruiter />
      <Services />
    </div>
  );
};

export default RecruiterApp;
