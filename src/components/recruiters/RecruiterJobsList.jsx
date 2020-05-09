import React, { useContext, useEffect, useState } from "react";

import { JobsContext } from "../../providers/JobsProvider";
import { UserContext } from "../../providers/UserProvider";

const RecruiterJobsList = () => {
  const jobs = useContext(JobsContext);
  const user = useContext(UserContext);

  const [myJobs, setMyJobs] = useState(null);
  const [jobsCount, setJobsCount] = useState(0);

  useEffect(() => {
    if (user.roles === "recruiter" && jobs) {
      //console.log(user.roles);

      const tempJobs = jobs.filter(function (job) {
        return job.recruiter.displayName === user.displayName;
      });

      const numberOfJobs = tempJobs.length;
      //console.log(tempJobs.length);
      setMyJobs(tempJobs);
      setJobsCount(numberOfJobs);
    }
  }, [user, jobs]);

  return (
    <div className="RecruiterJobsList">
      <div className="RecruiterJobsList--header">
        <div className="jobsCount">
          Jobs <span>{jobsCount}</span>{" "}
        </div>
        <div className="search">
          <input type="text" />
        </div>
      </div>
      {myJobs &&
        myJobs.map((job) => {
          return (
            <div className="RecruiterJobsList--job" key={job.id}>
              <div className="title">{job.title}</div>
              <div className="applicants">0</div>
              <div className="location">Joburg</div>
              <div className="date">Date</div>
            </div>
          );
        })}{" "}
      {/* <pre>{JSON.stringify(myJobs, null, 2)}</pre> */}
    </div>
  );
};

export default RecruiterJobsList;

{
  /* <div className="TableExample">
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Job Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>James</td>
        <td>Matman</td>
        <td>Chief Sandwich Eater</td>
      </tr>
      <tr>
        <td>The</td>
        <td>Tick</td>
        <td>Crimefighter Sorta</td>
      </tr>
    </tbody>
  </table>{" "}
</div>; */
}
