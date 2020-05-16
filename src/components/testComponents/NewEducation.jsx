import React from "react";

const NewEducation = ({ index, eduState, handleEduChange }) => {
  const institutionId = `institution-${index}`;
  const graduationId = `graduation-${index}`;

  return (
    <div className="flex">
      <label htmlFor={institutionId}>{`Instituion #${index + 1}`}</label>
      <input
        type="text"
        name={institutionId}
        data-index={index}
        className="institution"
        value={eduState[index].institution}
        onChange={handleEduChange}
      />
      <label htmlFor={graduationId}>Graduation Year</label>
      <input
        type="text"
        name={graduationId}
        data-index={index}
        className="graduationYear"
        value={eduState[index].graduationYear}
        onChange={handleEduChange}
      />
    </div>
  );
};

export default NewEducation;
