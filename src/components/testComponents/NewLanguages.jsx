import React from "react";

const NewLanguages = ({ languagesArr, state, handleChange }) => {
  //console.log(languagesArr);
  const languages = languagesArr.map((language, index) => (
    <div key={`language-${index}`} className="flex">
      <label className="item1" htmlFor="language">
        Language
      </label>
      <input className="item2" type="text" />
      <label className="item1" htmlFor="languageLevel">
        Level
      </label>
      <select
        className="item2"
        name="languageLevel"
        value={state.languageLevel || ""}
        onChange={handleChange}
      >
        <option defaultValue>Select one...</option>
        <option value="Basic">Basic</option>
        <option value="Medium">Medium</option>
        <option value="Good">Good</option>
      </select>
    </div>
  ));
  return <>{languages}</>;
};

export default NewLanguages;
