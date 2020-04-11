import React, { useContext } from "react";

import { JobsContext } from "../providers/JobsProvider";
import JobCard from "./jobs/JobCard";

const JobsList = () => {
  const jobs = useContext(JobsContext);

  //console.log(jobs);
  return (
    <div className="JobsList">
      {jobs.map((job) => (
        <JobCard {...job} key={job.id} />
      ))}
    </div>
  );
};

export default JobsList;
