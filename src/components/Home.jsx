import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import moment from "moment";

import useSetState from "./useSetState";
import { JobsContext } from "../providers/JobsProvider";
import JobSort from "./jobs/JobSort";

const initialState = {
  query: "",
};

const initialTabMenu = [
  { id: 0, content: "Jobs by Category" },
  { id: 1, content: "Jobs by City" },
  { id: 2, content: "Jobs by Title" },
];

const Home = () => {
  const history = useHistory();
  const jobs = useContext(JobsContext);

  // Tabs and their state handling
  const [tabMenu, setTabMenu] = useState(initialTabMenu);
  const [showContent, setShowContent] = useState("Jobs by Category");

  const handleTabClick = (event) => {
    const updatedTabMenu = tabMenu.map((item) => ({
      ...item,
      isActive: +event.target.id === item.id,
    }));

    // Changing Tab Content after clicking a tab
    const tempShowContent = event.target.textContent;

    setShowContent(tempShowContent);
    setTabMenu(updatedTabMenu);
  };

  // Form state
  const [queryState, setQueryState] = useSetState(initialState);

  // Onchange handle for search form
  const handleChange = (event) => {
    setQueryState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { query } = queryState;

    // redirect to search results page
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
      {/* <div className="LatestJobs">
        {jobs &&
          jobs.map((job, index) => (
            <div key={job.id} className="Home--Job">
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
      </div> */}
      <div className="SortBy">
        <h3>Sort By</h3>
        <div className="Tabs">
          <div className="Tabs--row">
            {tabMenu.map((item, index) => (
              <label
                key={`tab-${index}`}
                id={index}
                htmlFor={item.content}
                className={`tab ${item.isActive ? "selected" : ""}`}
                onClick={handleTabClick}
              >
                {item.content}
              </label>
            ))}
          </div>
          <div className="Tabs--panel">
            <JobSort showContent={showContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
