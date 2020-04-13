import React from "react";
import moment from "moment";

const JobCard = (props) => {
  const { title, description, user, createdAt } = props;
  // console.log(props);
  return (
    <div className="JobCard">
      <div className="JobCard--Meta">
        <ul className="details">
          <li className="author">{user.displayName}</li>
          <li className="date">
            <span className="fas fa-calendar-week"></span>
            {moment(createdAt.toDate()).calendar()}
          </li>
        </ul>
      </div>
      <div className="JobCard--Description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobCard;
