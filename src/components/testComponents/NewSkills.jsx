import React from "react";

const NewSkills = ({ skillsArr, state, handleChange }) => {
  //console.log(skillsArr);
  const skills = skillsArr.map((skill, index) => (
    <div className="flex" key={`skill-${index}`}>
      <label className="item1" htmlFor="skill">
        Skill
      </label>
      <input className="item2" type="text" />
      <label className="item1" htmlFor="skillLevel">
        Level
      </label>
      <select
        className="item2"
        name="skillLevel"
        value={state.skillLevel || ""}
        onChange={handleChange}
      >
        <option defaultValue>Select one...</option>
        <option value="Basic">Basic</option>
        <option value="Medium">Medium</option>
        <option value="Good">Good</option>
      </select>
    </div>
  ));
  return <>{skills}</>;
};

export default NewSkills;
