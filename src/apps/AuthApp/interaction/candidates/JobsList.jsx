import React, { useContext } from "react";

import { JobsContext } from "../../../../providers/JobsProvider";
import Job from "./Job";

const JobsList = () => {
  const jobs = useContext(JobsContext);

  //console.log(jobs);
  return (
    <div className="JobsList">
      {jobs.map((job) => (
        <Job {...job} key={job.id} />
      ))}
    </div>
  );
};

export default JobsList;
