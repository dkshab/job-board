import React from "react";

const NewLanguages = ({ languagesState, state, handleChange }) => {
  // console.log(languagesState);

  return (
    <>
      {languagesState.map((val, index) => {
        return (
          <div key={`language-${index}`} className="flex">
            <label className="item1" htmlFor={`language${index}`}>
              Language
            </label>
            <input
              className="item2"
              type="text"
              name={`language${index}`}
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor={`languageLevel${index}`}>
              Level
            </label>
            <select
              className="item2"
              name={`languageLevel${index}`}
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

export default NewLanguages;
