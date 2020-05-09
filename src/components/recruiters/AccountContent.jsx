import React from "react";

import RecruiterJobsList from "./RecruiterJobsList";

const AccountContent = ({ showContent }) => {
  if (showContent === "jobs") {
    return <RecruiterJobsList />;
  } else {
    return <p>Add relevant content here.</p>;
  }
};

export default AccountContent;
