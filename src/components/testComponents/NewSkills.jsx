import React from "react";

const NewSkills = ({ skillsArr, skillState, state, handleChange }) => {
  //console.log(skillState);

  return (
    <>
      {skillState.map((val, index) => {
        return (
          <div className="flex" key={`skill${index}`}>
            <label className="item1" htmlFor={`skillTitle${index}`}>
              Skill
            </label>
            <input
              className="item2"
              type="text"
              name={`skillTitle${index}`}
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor={`skillLevel${index}`}>
              Level
            </label>
            <select
              className="item2"
              name={`skillLevel${index}`}
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Basic">Basic</option>
              <option value="Medium">Medium</option>
              <option value="Good">Good</option>
            </select>
          </div>
        );
      })}
    </>
  );
};

export default NewSkills;
