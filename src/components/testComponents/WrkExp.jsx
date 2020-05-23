import React from "react";

const WrkExp = ({ index, state, handleWrkChange }) => {
  const wrkId = `jobTitle-${index}`;
  const companyId = `companyName-${index}`;

  return (
    <div className="flex" key={`jobTitle-${index}`}>
      <label htmlFor={wrkId}>{`Job #${index + 1}`}</label>
      <input
        type="text"
        name={wrkId}
        data-index={index}
        id={wrkId}
        className="jobTitle"
        value={state.workExperience[index].jobTitle || ""}
        onChange={handleWrkChange}
      />

      <label htmlFor={companyId} className="item1">
        Company
      </label>
      <input
        type="text"
        name={companyId}
        data-index={index}
        id={companyId}
        className="companyName"
        value={state.workExperience[index].companyName || ""}
        onChange={handleWrkChange}
      />
    </div>
  );
};

export default WrkExp;
