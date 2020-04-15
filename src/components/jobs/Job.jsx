import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Job = (props) => {
  const { title, description, id, recruiter, createdAt } = props;
  const limit = 250;
  console.log(description.length > limit);
  const content =
    description.length > limit
      ? description.substring(0, limit) + "..."
      : description;
  return (
    <div className="Job">
      <div className="Job--Meta">
        <ul className="details">
          <li className="author">{recruiter.displayName}</li>
          <li className="date">
            <span className="fas fa-calendar-week"></span>
            {moment(createdAt.toDate()).calendar()}
          </li>
        </ul>
      </div>
      <div className="Job--Description">
        <h2>{title}</h2>
        <p className="content">{content}</p>
        <p className="apply">
          <Link to={`jobs/${id}`}>Apply</Link>
          <span className="far fa-heart"></span>
        </p>
      </div>
    </div>
  );
};

export default Job;
