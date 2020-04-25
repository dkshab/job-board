import React from "react";

const WrkExp = ({ wrkExp, wrkExpState, state, handleChange }) => {
  //console.log(wrkExpState);
  return (
    <>
      {wrkExpState.map((val, index) => {
        return (
          <div className="flex" key={`wrkExp-${index}`}>
            <label className="item1" htmlFor={`jobTitle${index}`}>
              Job Title
            </label>
            <input
              className="item2"
              type="text"
              name={`jobTitle${index}`}
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor={`companyName${index}`}>
              Company name
            </label>
            <input
              className="item2"
              type="text"
              name={`companyName${index}`}
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor={`startDate${index}`}>
              Start date
            </label>
            <select
              className="item2"
              name={`startDate${index}`}
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label className="item1" htmlFor={`endDate${index}`}>
              End date
            </label>
            <select
              className="item2"
              name={`endDate${index}`}
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
            </select>
            <label htmlFor={`industry${index}`}>Industry</label>
            <select
              name={`industry${index}`}
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Legal">Legal</option>
              <option value="Education & Training">Education & Training</option>
              <option value="Scientific & Engineering">
                Scientific & Engineering
              </option>
            </select>
          </div>
        );
      })}
    </>
  );
  // const testing = wrkExpArr.map((wrkExp, index) => (
  //   <div className="flex" key={`wrkExp-${index}`}>
  //

  //   </div>
  // ));
};

export default WrkExp;
