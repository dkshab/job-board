import React, { useContext, useEffect, useState } from "react";
import moment from "moment";

import { JobsContext } from "../../providers/JobsProvider";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";

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

  if (myJobs) {
    console.log(myJobs[1]);
  }

  return (
    <div className="RecruiterJobsList">
      <div className="RecruiterJobsList--header">
        <div className="jobsCount">
          Jobs <span>{jobsCount}</span>{" "}
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="RecruiterJobsList--status">
        <div className="left">
          <span className="status-title">Status:</span>
          <div className="tiles">
            <div className="tile">
              {" "}
              Active <span className="fas fa-times"></span>
            </div>
            <div className="tile">
              {" "}
              Expired <span className="fas fa-times"></span>
            </div>
            <div className="tile">
              {" "}
              Gauteng <span className="fas fa-times"></span>
            </div>
          </div>
        </div>
        <div className="right">
          Default sorting <span className="fas fa-caret-down"></span>{" "}
        </div>
      </div>
      {myJobs &&
        myJobs.map((job) => {
          return (
            <div className="RecruiterJobsList--job" key={job.id}>
              <div className="title">
                {" "}
                <Link to={`jobs/${job.id}`}>{job.title}</Link>{" "}
              </div>
              <div className="applicants">Applications (0)</div>
              <div className="location">{job.location}</div>
              <div className="date">
                {moment(job.createdAt.toDate()).calendar()}
              </div>
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
