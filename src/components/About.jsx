import React, { useContext } from "react";
import moment from "moment";

import { JobsContext } from "../providers/JobsProvider";
import { Link } from "react-router-dom";

const About = () => {
  const jobs = useContext(JobsContext);
  return (
    <div className="About">
      <div className="Hero">
        <div className="Hero--inner">
          {jobs && <h3> {jobs.length} Jobs found</h3>}
          <form className="flex-form">
            <input type="search" name="query" />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
      <div className="SearchResults">
        <aside>
          <div className="City">
            <p>Refine by City</p>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Johannesburg</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Durban</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Cape Town</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">East London</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Kimberley</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Bloemfontein</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Polokwane</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Nelspruit</label>
            </div>
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Rustenburg</label>
            </div>
          </div>
          <div className="Category">
            <p>Refine by Category</p>{" "}
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">IT & Telecommunications</label>
            </div>{" "}
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">
                Banking, Finance, Insurance, Stockbroking{" "}
              </label>
            </div>{" "}
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">
                {" "}
                Engineering, Technical, Production & Manufacturing
              </label>
            </div>{" "}
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Accounting, Auditing</label>
            </div>{" "}
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">Sales & Purchasing</label>
            </div>{" "}
            <div className="checkField">
              <input type="checkbox" />
              <label htmlFor="todo">
                FMCG, Retail, Wholesale & Supply Chain
              </label>
            </div>{" "}
          </div>
        </aside>
        <div className="Results">
          {jobs &&
            jobs.map((job, index) => (
              <div key={`Search--Job-${index}`} className="Search--Job">
                <div className="left">
                  <p className="jobTitle">
                    <Link to={`jobs/${job.id}`}>{job.title}</Link>
                  </p>
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
        </div>
      </div>
    </div>
  );
};

export default About;
