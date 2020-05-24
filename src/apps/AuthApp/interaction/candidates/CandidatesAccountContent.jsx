import React from "react";
import Credentials from "./Credentials";

const CandidatesAccountContent = ({ showContent, user }) => {
  if (showContent === "Settings") {
    return <Credentials user={user} />;
  } else {
    return <div>{showContent}</div>;
  }
};

export default CandidatesAccountContent;
