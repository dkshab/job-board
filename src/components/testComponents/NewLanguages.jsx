import React from "react";

const NewLanguages = ({ index, languagesState, handleLanguageChange }) => {
  const languageId = `language-${index}`;
  const languageLevelId = `languageLevel-${index}`;

  return (
    <div className="flex">
      <label htmlFor={languageId}>{`Language #${index + 1}`}</label>
      <input
        className="languageTitle"
        type="text"
        data-index={index}
        name={languageId}
        value={languagesState[index].languageTitle}
        onChange={handleLanguageChange}
      />
      <label htmlFor={languageLevelId}>Level</label>
      <select
        className="languageLevel"
        name={languageLevelId}
        data-index={index}
        value={languagesState[index].languageLevel}
        onChange={handleLanguageChange}
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

export default NewLanguages;
