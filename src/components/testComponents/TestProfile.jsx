import React, { useState } from "react";

import useSetState from "../useSetState";

const initialState = {
  firstName: "Dumisani",
  surname: "Shabangu",
  email: "dumisani888@gmail.com",
  jobTitle: "Fancy title",
  companyName: "",
};

const TestProfile = () => {
  const [state, setState] = useSetState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    clear();
  };

  const clear = () => {
    setState(initialState);
  };

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const addWrkExp = (event) => {
    event.preventDefault();
    let count = 0;
    let obj = {};

    let wrkRE = /jobTitle/g;
    Object.keys(state).map((val, index) => {
      if (wrkRE.test(val)) {
        count++;
        obj["jobTitle-" + count] = "";
        obj["companyName-" + count] = "";
      }
    });
    setState(obj);
  };
  const wrkExp = Object.keys(state).map((val, index) => {
    let wrkRender = /jobTitle/g;
    if (wrkRender.test(val)) {
      return (
        <div className="flex" key={`wrkExp-${index}`}>
          <label className="item1" htmlFor={`jobTitle-${index}`}>
            Job Title
          </label>
          <input
            className="item2"
            type="text"
            name={`jobTitle-${index}`}
            value={state.jobId}
            onChange={handleChange}
          />
          <label className="item1" htmlFor={`companyName-${index}`}>
            Company name
          </label>
          <input
            className="item2"
            type="text"
            name={`companyName-${index}`}
            value={state.jobId}
            onChange={handleChange}
          />
          <label className="item1" htmlFor={`startDate-${index}`}>
            Start date
          </label>
          <select
            className="item2"
            name="startDate-${index}"
            value={state.jobId || ""}
            onChange={handleChange}
          >
            <option defaultValue>Select one...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label className="item1" htmlFor={`endDate-${index}`}>
            End date
          </label>
          <select
            className="item2"
            name="endDate-${index}"
            value={state.jobId || ""}
            onChange={handleChange}
          >
            <option defaultValue>Select one...</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
          </select>
          <label htmlFor="industry">Industry</label>
          <select
            name="industry"
            value={state.industry || ""}
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
    }
  });
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
              className="item2"
              name="gender"
              value={state.gender || ""}
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
              value={state.title || ""}
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
              value={state.ethnicity || ""}
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
              value={state.firstName}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="surname">
              Surname
            </label>
            <input
              className="item2"
              type="text"
              name="surname"
              value={state.surname}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="email">
              Email
            </label>
            <input
              className="item2"
              type="text"
              name="email"
              value={state.email}
              disabled
            />
            <label className="item1" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="item2"
              type="text"
              name="phoneNumber"
              value={state.phoneNumber || ""}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="citizenship">
              Citizenship
            </label>
            <select
              className="item2"
              name="citizenship"
              value={state.citizenship || ""}
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
              value={state.saId}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="DOB">
              Date of birth
            </label>
            <input
              className="item2"
              type="text"
              name="DOB"
              value={state.DOB}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="relocation">
              Are you willing to relocate?
            </label>
            <select
              className="item2"
              name="relocation"
              value={state.relocation || ""}
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
              value={state.currentCity}
              onChange={handleChange}
            />
            <label className="item1" htmlFor="disability">
              Do you have a Disability?
            </label>
            <select
              className="item2"
              name="disability"
              value={state.disability || ""}
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
              value={state.introduction || ""}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="Profile--wrkExp">
          <h3>Work Experience</h3>
          {wrkExp}
          {/* <input
            type="button"
            value="Add Work Experience"
            onClick={addWrkExp}
          /> */}
          <button onClick={addWrkExp}>Add</button>
        </div>

        <div className="Profile--education">
          <h3>Education</h3>
          <div className="flex">
            <label className="item1" htmlFor="graduationYear">
              Graduation Year
            </label>
            <input className="item2" type="text" name="graduationYear" />
            <label className="item1" htmlFor="graduationInstitution">
              Institution
            </label>
            <input className="item2" type="text" name="graduationInstitution" />
            <label className="item1" htmlFor="studyField">
              Field of Study
            </label>
            <input className="item2" type="text" name="studyField" />
            <label className="item1" htmlFor="qualification">
              Qualification
            </label>
            <select
              className="item2"
              name="qualification"
              value={state.qualification || ""}
              onChange={handleChange}
            >
              <option defaultValue>Select one...</option>
              <option value="Diploma">Diploma</option>
              <option value="Honors">Honors</option>
              <option value="Masters">Masters</option>
            </select>
          </div>
        </div>
        <div className="Profile--skills">
          <h3>Skills</h3>
          <div className="flex">
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
        </div>
        <div className="Profile--languages">
          <h3>Languages</h3>
          <div className="flex">
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
          <select
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
        <div className="Profile--attach-cv">
          <h3>Attach you CV</h3>
          <input type="file" />
        </div>
        <input type="submit" value="Submit" />
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </form>
    </>
  );
};

export default TestProfile;
