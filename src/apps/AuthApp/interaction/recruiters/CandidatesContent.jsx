import React from "react";

import CandidatesList from "./CandidatesList";
import ShortListedCandidates from "./ShortListedCandidates";

const CandidatesContent = ({ showContent, jobId }) => {
  // const content = "Nothing yet";

  if (showContent === "candidates") {
    return <CandidatesList jobId={jobId} />;
  } else if (showContent === "short list") {
    return <ShortListedCandidates jobId={jobId} />;
  } else {
    return "Select something";
  }
};

export default CandidatesContent;
