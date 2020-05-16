import React from "react";

const NewSkills = ({ index, skillsState, handleSkillChange }) => {
  const skillId = `skill-${index}`;
  const skillLevelId = `skillLevel-${index}`;

  return (
    <div className="flex">
      <label htmlFor={skillId}>{`Skill #${index + 1}`}</label>
      <input
        type="text"
        name={skillId}
        data-index={index}
        className="skillTitle"
        value={skillsState[index].skillTitle}
        onChange={handleSkillChange}
      />
      <label htmlFor={skillLevelId}>Level</label>
      <select
        name={skillLevelId}
        data-index={index}
        className="skillLevel"
        value={skillsState[index].skillLevel}
        onChange={handleSkillChange}
      >
        <option defaultValue>Select one...</option>
        <option value="Basic">Basic</option>
        <option value="Medium">Medium</option>
        <option value="Good">Good</option>{" "}
        <option value="Expert">Expert</option>
      </select>
    </div>
  );
};

export default NewSkills;
