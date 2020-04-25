import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";

import useSetState from "../useSetState";
import WrkExp from "./WrkExp";
import NewEducation from "./NewEducation";
import NewSkills from "./NewSkills";
import NewLanguages from "./NewLanguages";

const initialState = {
  firstName: "Dumisani",
  surname: "Shabangu",
  email: "dumisani888@gmail.com",
  jobTitle: "Fancy title",
  companyName: "",
  skillsTitle: "",
  languageTitle: "",
};

const TestProfile = () => {
  const [state, setState] = useSetState(initialState);
  const [loading, setLoading] = useState(true);

  // Work experience
  const blankWrkExp = { jobTitle: "" };
  const [wrkExpState, setWrkExpState] = useState([{ ...blankWrkExp }]);

  // Education
  const blankEdu = { graduationYear: "" };
  const [eduState, setEduState] = useState([{ ...blankEdu }]);

  // Skills
  const blankSkill = { skillTitle: "" };
  const [skillState, setSkillState] = useState([{ ...blankSkill }]);

  // Languages
  const blankLanguage = { languageTitle: "" };
  const [languagesState, setLanguagesState] = useState([{ ...blankLanguage }]);

  const user = useContext(UserContext);
  useEffect(() => {
    if (user && loading) {
      //console.log("We have a user!", user);

      setState(user);
      setLoading(false);
    }
  }, [loading, setState, user]);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const addWrkExp = (event) => {
    event.preventDefault();

    let tempJob = {};
    let testWrkExp = Object.keys(wrkExpState);
    let countWrkExp = testWrkExp.length;

    tempJob["jobTitle" + countWrkExp] = "";
    setWrkExpState([...wrkExpState, { ...tempJob }]);
  };

  const addEdu = (event) => {
    event.preventDefault();

    const tempEdu = {};
    const tempEduState = Object.keys(eduState);
    const countEducation = tempEduState.length;

    tempEdu["graduationYear" + countEducation] = "";

    setEduState([...eduState, { ...tempEdu }]);
  };

  const addSkills = (event) => {
    event.preventDefault();

    const tempSkill = {};
    const tempSkillState = Object.keys(skillState);
    const countSkill = tempSkillState.length;

    tempSkill["skillTitle" + countSkill] = "";

    setSkillState([...skillState, { ...tempSkill }]);
  };

  const addLanguages = (event) => {
    event.preventDefault();

    const tempLang = {};
    const tempLangState = Object.keys(languagesState);
    const countLang = tempLangState.length;

    tempLang["languageTitle" + countLang] = "";

    setLanguagesState([...languagesState, { ...tempLang }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    clear();
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="Profile">
        <div className="Profile--personal">
          <h3>Personal Details</h3>
          <div className="flex">
            {" "}
            <label className="item1" htmlFor="gender">
              Gender
            </label>
            <select
              className="item2 select-css"
              name="gender"
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label className="item1" htmlFor="title">
              Title
            </label>
            <select
              className="item2"
              name="title"
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
            </select>
            <label className="item1" htmlFor="ethnicity">
              Ethnicity
            </label>
            <select
              className="item2"
              name="ethnicity"
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>
            <label className="item1" htmlFor="first-name">
              First Name
            </label>
            <input
              className="item2"
              type="text"
              name="firstName"
              id="firstName"
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="surname">
              Surname
            </label>
            <input
              className="item2"
              type="text"
              name="surname"
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="email">
              Email
            </label>
            <input
              className="item2"
              type="text"
              name="email"
              value={state.name}
              disabled
            />
            <label className="item1" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="item2"
              type="text"
              name="phoneNumber"
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="citizenship">
              Citizenship
            </label>
            <select
              className="item2"
              name="citizenship"
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="South African Citizen">
                South African Citizen
              </option>
              <option value="Not South African with a work permit">
                Not South African with a work permit
              </option>
            </select>
            <label className="item1" htmlFor="saId">
              South African ID
            </label>
            <input
              className="item2"
              type="text"
              name="saId"
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="DOB">
              Date of birth
            </label>
            <input
              className="item2"
              type="text"
              name="DOB"
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="relocation">
              Are you willing to relocate?
            </label>
            <select
              className="item2"
              name="relocation"
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="No">No</option>
              <option value="Within SA">Within SA</option>
            </select>
            <label className="item1" htmlFor="currentCity">
              Current City
            </label>
            <input
              className="item2"
              type="text"
              name="currentCity"
              value={state.name}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="disability">
              Do you have a Disability?
            </label>
            <select
              className="item2"
              name="disability"
              value={state.name}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label className="item1" htmlFor="introduction">
              Introduction
            </label>
            <textarea
              className="item2"
              name="introduction"
              value={state.name}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="Profile--wrkExp">
          <h3>Work Experience</h3>
          <button onClick={addWrkExp}>Add</button>
          <WrkExp
            wrkExpState={wrkExpState}
            handleChange={handleChange}
            state={state}
          />
        </div>

        <div className="Profile--education">
          <h3>Education</h3>
          <button onClick={addEdu}>Add</button>
          <NewEducation
            eduState={eduState}
            handleChange={handleChange}
            state={state}
          />
        </div>
        <div className="Profile--skills">
          <h3>Skills</h3>
          <button onClick={addSkills}>Add</button>
          <NewSkills
            skillState={skillState}
            handleChange={handleChange}
            state={state}
          />
        </div>
        <div className="Profile--languages">
          <h3>Languages</h3>
          <button onClick={addLanguages}>Add</button>
          <NewLanguages
            languagesState={languagesState}
            handleChange={handleChange}
            state={state}
          />
        </div>
        <div className="Profile--desired-job">
          <h3>Desired Job Criteria</h3>
          <div className="flex">
            <label className="item1" htmlFor="desiredJobTitle">
              Job Title
            </label>
            <input
              className="item2"
              type="text"
              name="desiredJobTitle"
              value={state.desiredJobTitle || ""}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="jobCategory">
              Job Category
            </label>
            <select
              className="item2"
              name="jobCategory"
              value={state.jobCategory || ""}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Legal">Legal</option>
              <option value="Education & Training">Education & Training</option>
              <option value="Scientific & Engineering">
                Scientific & Engineering
              </option>
            </select>
            <label className="item1" htmlFor="jobStatus">
              Job status
            </label>
            <select
              className="item2"
              name="jobStatus"
              value={state.jobStatus || ""}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Fixed Term">Fixed Term</option>
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
            </select>
            <label className="item1" htmlFor="salaryRange">
              Salary Range
            </label>
            <select
              className="item2"
              name="salaryRange"
              value={state.salaryRange || ""}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="0-50K Annually R">0-50K Annually R</option>
              <option value="50-100K Annually R">50-100K Annually R</option>
              <option value="100-150K Annually R">100-150K Annually R</option>
              <option value="150-200K Annually R">150-200K Annually R</option>
              <option value="200-250K Annually R">200-250K Annually R</option>
            </select>
          </div>
        </div>
        <div className="Profile--notice-period">
          <h3>Notice Period</h3>
          <div className="flex">
            <label className="item1" htmlFor="noticePeriod">
              Notice
            </label>
            <select
              className="item2"
              name="noticePeriod"
              value={state.noticePeriod || ""}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Immediate">Immediate</option>
              <option value="7 days">7 days</option>
              <option value="2 weeks">2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="2 months">2 months</option>
              <option value="More than 2 months">More than 2 months</option>
            </select>
          </div>
        </div>
        <div className="Profile--current-salary">
          <h3>Current Salary</h3>
          <div className="flex">
            <label className="item1" htmlFor="currentSalary">
              Salary
            </label>
            <select
              className="item2"
              name="currentSalary"
              value={state.currentSalary || ""}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="0-50K Annually R">0-50K Annually R</option>
              <option value="50-100K Annually R">50-100K Annually R</option>
              <option value="100-150K Annually R">100-150K Annually R</option>
              <option value="150-200K Annually R">150-200K Annually R</option>
              <option value="200-250K Annually R">200-250K Annually R</option>
            </select>
          </div>
        </div>
        <div className="Profile--attach-cv">
          <h3>Attach you CV</h3>
          <input type="file" />
        </div>
        <button>Submit</button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </form>
    </>
  );
};

export default TestProfile;
