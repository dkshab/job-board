import React from "react";

const NewEducation = ({ educationArr, eduState, state, handleChange }) => {
  //console.log(eduState);

  return (
    <>
      {eduState.map((val, index) => {
        return (
          <div key={`education${index}`} className="flex">
            <label className="item1" htmlFor={`graduationYear${index}`}>
              Graduation Year
            </label>
            <input
              className="item2"
              type="text"
              name={`graduationYear${index}`}
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor={`graduationInstitution${index}`}>
              Institution
            </label>
            <input
              className="item2"
              type="text"
              name={`graduationInstitution${index}`}
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor={`studyField${index}`}>
              Field of Study
            </label>
            <input
              className="item2"
              type="text"
              name={`studyField${index}`}
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor={`qualification${index}`}>
              Qualification
            </label>
            <select
              className="item2"
              name={`qualification${index}`}
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Diploma">Diploma</option>
              <option value="Honors">Honors</option>
              <option value="Masters">Masters</option>
            </select>
          </div>
        );
      })}
    </>
  );
};

export default NewEducation;
