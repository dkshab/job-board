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
        <ul className="details">
          <li className="author">{recruiter.displayName}</li>
          <li className="date">
            <span className="fas fa-calendar-week">
              {moment(currentDate).calendar()}
            </span>
          </li>
        </ul>
      </div>
      <div className="SearchCard--Description">
        <h2>{title}</h2>
        <p className="content">{content}</p>
        <p className="apply">
          <Link to={`jobs/${objectID}`}>Apply</Link>
          <span className="far fa-heart"></span>
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
