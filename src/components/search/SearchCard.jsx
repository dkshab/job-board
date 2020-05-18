import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const SearchCard = ({
  location,

  title,
  type,
  company,
  objectID,
  description,
  recruiter,
  createdAt,
}) => {
  const currentDate = new Date(1970, 0, 1);
  currentDate.setSeconds(createdAt._seconds);
  //console.log();
  const limit = 150;
  const content =
    description.length > limit
      ? description.substring(0, limit) + "..."
      : description;

  return (
    <div className="SearchCard">
      <div className="SearchCard--Meta">
        <div className="left">
          <p className="jobTitle">
            <Link to={`/jobs/${objectID}`}>{title}</Link>
          </p>
          <div className="job-meta">
            <p>
              <span className="fas fa-briefcase"></span> {company}
            </p>
            <p>
              <span className="fas fa-map-marker-alt"></span> {location}
            </p>
          </div>
        </div>
        <div className="right">
          <p className="work-type">{type}</p>
          <p>
            <span className="fas fa-calendar"></span>
            {moment(currentDate).calendar()}
          </p>
        </div>
      </div>

      <div className="SearchCard--Content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SearchCard;
