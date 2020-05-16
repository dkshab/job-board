import React from "react";

const NewEducation = ({ index, eduState, handleEduChange }) => {
  const institutionId = `institution-${index}`;
  const graduationId = `graduation-${index}`;
  const fieldOfStudyId = `fieldOfStudy-${index}`;
  const qualificationId = `qualification-${index}`;

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
      <label htmlFor={fieldOfStudyId}>Field of Study and subjects</label>
      <input
        type="text"
        className="fieldOfStudy"
        data-index={index}
        name={fieldOfStudyId}
        value={eduState[index].fieldOfStudy || ""}
        onChange={handleEduChange}
      />
      <label htmlFor={qualificationId}>Qualification</label>
      <input
        type="text"
        className="qualification"
        data-index={index}
        name={qualificationId}
        value={eduState[index].qualification || ""}
        onChange={handleEduChange}
      />
    </div>
  );
};

export default NewEducation;
