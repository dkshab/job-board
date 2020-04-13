import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const { title, description, id } = props;
  console.log(props);
  return (
    <div className="JobCard">
      <div className="header">
        <div className="title">{title}</div>
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
      <Link to={`jobs/${id}`}>
        <p>Apply</p>
      </Link>
    </div>
  );
};

export default JobCard;
