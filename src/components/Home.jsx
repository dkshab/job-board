import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import moment from "moment";

import useSetState from "./useSetState";
import { JobsContext } from "../providers/JobsProvider";

const initialState = {
  query: "",
};

const Home = () => {
  const history = useHistory();
  const jobs = useContext(JobsContext);

  const [queryState, setQueryState] = useSetState(initialState);

  const handleChange = (event) => {
    setQueryState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(queryState);
    const { query } = queryState;

    history.push(`search/${query}`);
  };
  return (
    <div className="Home">
      <div className="Home--hero">
        <h1>Your next best career move</h1>
        <form className="flex-form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="query"
            value={queryState.query}
            onChange={handleChange}
            required
          />{" "}
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="LatestJobs">
        {jobs &&
          jobs.map((job, index) => (
            <div key={`Home--Job-${index}`} className="Home--Job">
              <div className="left">
                <p className="jobTitle"> {job.title}</p>
                <div className="job-meta">
                  <p>
                    <span className="fas fa-briefcase"></span> {job.company}
                  </p>
                  <p>
                    <span className="fas fa-map-marker-alt"></span>{" "}
                    {job.location}
                  </p>
                </div>
              </div>
              <div className="right">
                <p className="work-type">{job.type}</p>
                <p>
                  <span className="fas fa-calendar"></span>
                  {moment(job.createdAt.toDate()).calendar()}
                </p>
              </div>
            </div>
          ))}
        <p className="cta-alljobs">
          <Link to="/jobs">View All {jobs.length} Jobs</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
