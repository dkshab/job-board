import React from "react";

const JobCard = (props) => {
  const { title, description } = props;
  return (
    <div className="JobCard">
      <div className="header">
        <div className="title">{title}</div>
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobCard;
