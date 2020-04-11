import React from "react";

const JobCard = (props) => {
  const { title, description } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default JobCard;
