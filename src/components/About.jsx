import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../providers/UserProvider";
import Spinner from "./Spinner";

const blankWrkExp = { jobTitle: "", companyName: "" };

const About = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setState(user);
      setLoading(false);
    }
  }, [user]);

  const handleWrkChange = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { workExperience } = state;

    workExperience[event.target.dataset.index][event.target.className] =
      event.target.value;

    updatedState.workExperience = workExperience;

    setState(updatedState);
  };

  const addWrkExp = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { workExperience } = state;

    const updatedWorkExperience = [...workExperience, { ...blankWrkExp }];

    updatedState.workExperience = updatedWorkExperience;

    setState(updatedState);

    //console.log(updatedWorkExperience);
  };

  return (
    <div className="About">
      <h3>Testing still</h3>

      {loading ? (
        <Spinner />
      ) : (
        <div className="Profile--wrkExp">
          <h3>Work Experience</h3>
          <button onClick={addWrkExp}>Add</button>

          {state.workExperience.map((val, index) => {
            const wrkId = `jobTitle-${index}`;
            const companyId = `companyName-${index}`;

            return (
              <div key={`jobTitle-${index}`}>
                <label htmlFor={wrkId}>{`Job #${index + 1}`}</label>
                <input
                  type="text"
                  name={wrkId}
                  data-index={index}
                  className="jobTitle"
                  value={state.workExperience[index].jobTitle}
                  onChange={handleWrkChange}
                />

                <label htmlFor={companyId}>Company</label>
                <input
                  type="text"
                  name={companyId}
                  data-index={index}
                  className="companyName"
                  value={state.workExperience[index].companyName}
                  onChange={handleWrkChange}
                />
              </div>
            );
          })}
        </div>
      )}

      <hr />
    </div>
  );
};

export default About;
