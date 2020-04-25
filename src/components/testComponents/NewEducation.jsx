import React from "react";

const NewEducation = ({ educationArr, state, handleChange }) => {
  //console.log(educationArr);
  const myEdu = educationArr.map((val, index) => (
    <div key={`education-${index}`} className="flex">
      <label className="item1" htmlFor={`graduationYear-${index}`}>
        Graduation Year
      </label>
      <input className="item2" type="text" name={`graduationYear-${index}`} />
      <label className="item1" htmlFor={`graduationInstitution-${index}`}>
        Institution
      </label>
      <input
        className="item2"
        type="text"
        name={`graduationInstitution-${index}`}
      />
      <label className="item1" htmlFor={`studyField-${index}`}>
        Field of Study
      </label>
      <input className="item2" type="text" name={`studyField-${index}`} />
      <label className="item1" htmlFor={`qualification-${index}`}>
        Qualification
      </label>
      <select
        className="item2"
        name={`qualification-${index}`}
        value={state.qualification || ""}
        onChange={handleChange}
      >
        <option defaultValue>Select one...</option>
        <option value="Diploma">Diploma</option>
        <option value="Honors">Honors</option>
        <option value="Masters">Masters</option>
      </select>
    </div>
  ));
  return <>{myEdu}</>;
};

export default NewEducation;
