import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Job = (props) => {
  const { title, description, id, user, createdAt } = props;
  // console.log(props);
  return (
    <div className="Job">
      <div className="Job--Meta">
        <ul className="details">
          <li className="author">{user.displayName}</li>
          <li className="date">
            <span className="fas fa-calendar-week"></span>
            {moment(createdAt.toDate()).calendar()}
          </li>
        </ul>
      </div>
      <div className="Job--Description">
        <h2>{title}</h2>
        <p className="content">{description}</p>
        <p className="apply">
          <Link to={`jobs/${id}`}>Apply</Link>
          <span className="far fa-heart"></span>
        </p>
      </div>
    </div>
  );
};

export default Job;
