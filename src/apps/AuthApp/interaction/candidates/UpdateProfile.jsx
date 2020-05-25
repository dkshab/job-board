import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

import { UserContext } from "../../../../providers/UserProvider";
import { firestore, storage } from "../../../../utilities/firebase";

import * as ROUTES from "../../../../constants/routes";
import Spinner from "../../staticComponents/SpinnerAuth";

const initialState = {
  firstName: "",
  surname: "",
  email: "",
};

const blankWrkExp = { jobTitle: "", companyName: "" };
const blankEdu = { institution: "", graduationYear: "" };
const blankSkill = { skillTitle: "", skillLevel: "" };
const blankLanguage = { languageTitle: "", languageLevel: "" };

const UpdateProfile = () => {
  const history = useHistory();

  // New Changes
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({});

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");

  useEffect(() => {
    if (user) {
      setState(user);
      setLoading(false);
    }
  }, [user]);

  const handleChange = (event) => {
    event.preventDefault();
    const updatedState = { ...state };

    updatedState[event.target.name] = event.target.value;

    setState(updatedState);
  };

  const handleWrkChange = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { workExperience } = state;

    workExperience[event.target.dataset.index][event.target.className] =
      event.target.value;

    updatedState.workExperience = workExperience;

    setState(updatedState);
  };

  const handleEduChange = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { education } = state;

    education[event.target.dataset.index][event.target.className] =
      event.target.value;

    updatedState.education = education;

    setState(updatedState);
  };

  const handleSkillChange = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { skills } = state;

    skills[event.target.dataset.index][event.target.className] =
      event.target.value;

    updatedState.skills = skills;

    setState(updatedState);
  };

  const handleLanguageChange = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { languages } = state;

    languages[event.target.dataset.index][event.target.className] =
      event.target.value;

    updatedState.languages = languages;

    setState(updatedState);
  };

  const addWrkExp = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { workExperience } = state;

    const updatedWorkExperience = [...workExperience, { ...blankWrkExp }];

    updatedState.workExperience = updatedWorkExperience;

    setState(updatedState);
  };

  const addEducation = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { education } = state;

    const updatedEducation = [...education, { ...blankEdu }];

    updatedState.education = updatedEducation;

    setState(updatedState);
  };

  const addSkill = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { skills } = state;

    const updatedSkills = [...skills, { ...blankSkill }];

    updatedState.skills = updatedSkills;

    setState(updatedState);
  };

  const addLanguage = (event) => {
    event.preventDefault();
    const updatedState = { ...state };
    const { languages } = state;

    const updatedLanguages = [...languages, { ...blankLanguage }];

    updatedState.languages = updatedLanguages;

    setState(updatedState);
  };

  const handleFileInput = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  // Submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (user) {
      const userRef = firestore.doc(`users/${user.uid}`);

      userRef.update(state);

      if (user.resumeURL) {
        let tempFileRef = storage.refFromURL(user.resumeURL);
        // deleting existing resume
        tempFileRef
          .delete()
          .then(() => {
            console.log("File deleted!");
            userRef.update({
              resumeURL: firebase.firestore.FieldValue.delete(),
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }

      // Uploading new resume

      if (file) {
        storage
          .ref()
          .child("resumes")
          .child(user.uid)
          .child(filename)
          .put(file)
          .then((response) => response.ref.getDownloadURL())
          .then((resumeURL) => userRef.update({ resumeURL }))
          .then(() => {
            console.log("Resume uploaded!");
          });
      }

      // Redirect to profile page
      history.push(ROUTES.PROFILE);
    }

    // Reset the state to blank
    clear();
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
                value={state.gender}
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
                value={state.title}
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
                value={state.ethnicity}
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
                onChange={handleChange}
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
                value={state.citizenship}
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
                value={state.saId || ""}
                onChange={handleChange}
              />
              <label className="item1" htmlFor="DOB">
                Date of birth
              </label>
              <input
                className="item2"
                type="text"
                name="DOB"
                value={state.DOB || ""}
                onChange={handleChange}
              />
              <label className="item1" htmlFor="relocation">
                Are you willing to relocate?
              </label>
              <select
                className="item2"
                name="relocation"
                value={state.relocation}
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
                value={state.currentCity || ""}
                onChange={handleChange}
              />
              <label className="item1" htmlFor="disability">
                Do you have a Disability?
              </label>
              <select
                className="item2"
                name="disability"
                value={state.disability}
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
                value={state.introduction}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="Profile--wrkExp">
            <h3>Work Experience</h3>
            <button onClick={addWrkExp}>Add</button>
            {state.workExperience.map((val, index) => {
              const wrkId = `jobTitle-${index}`;
              const companyId = `companyName-${index}`;
              return (
                <div className="flex" key={`jobTitle-${index}`}>
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
          <div className="Profile--education">
            <h3>Education</h3>
            <button onClick={addEducation}>Add</button>
            {state.education.map((val, index) => {
              const institutionId = `institution-${index}`;
              const graduationId = `graduation-${index}`;
              const fieldOfStudyId = `fieldOfStudy-${index}`;
              const qualificationId = `qualification-${index}`;
              return (
                <div className="flex" key={`education-${index}`}>
                  <label htmlFor={institutionId}>{`Instituion #${
                    index + 1
                  }`}</label>
                  <input
                    type="text"
                    name={institutionId}
                    data-index={index}
                    className="institution"
                    value={state.education[index].institution}
                    onChange={handleEduChange}
                  />
                  <label htmlFor={graduationId}>Graduation Year</label>
                  <input
                    type="text"
                    name={graduationId}
                    data-index={index}
                    className="graduationYear"
                    value={state.education[index].graduationYear}
                    onChange={handleEduChange}
                  />
                  <label htmlFor={fieldOfStudyId}>
                    Field of Study and subjects
                  </label>
                  <input
                    type="text"
                    className="fieldOfStudy"
                    data-index={index}
                    name={fieldOfStudyId}
                    value={state.education[index].fieldOfStudy || ""}
                    onChange={handleEduChange}
                  />
                  <label htmlFor={qualificationId}>Qualification</label>
                  <input
                    type="text"
                    className="qualification"
                    data-index={index}
                    name={qualificationId}
                    value={state.education[index].qualification || ""}
                    onChange={handleEduChange}
                  />
                </div>
              );
            })}
          </div>
          <div className="Profile--skills">
            <h3>Skills</h3>
            <button onClick={addSkill}>Add</button>
            {state.skills.map((val, index) => {
              const skillId = `skill-${index}`;
              const skillLevelId = `skillLevel-${index}`;
              return (
                <div className="flex" key={`skill-${index}`}>
                  <label htmlFor={skillId}>{`Skill #${index + 1}`}</label>
                  <input
                    type="text"
                    name={skillId}
                    data-index={index}
                    className="skillTitle"
                    value={state.skills[index].skillTitle}
                    onChange={handleSkillChange}
                  />
                  <label htmlFor={skillLevelId}>Level</label>
                  <select
                    name={skillLevelId}
                    data-index={index}
                    className="skillLevel"
                    value={state.skills[index].skillLevel}
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
            })}
          </div>{" "}
          <div className="Profile--languages">
            <h3>Languages</h3>
            <button onClick={addLanguage}>Add</button>
            {state.languages.map((val, index) => {
              const languageId = `language-${index}`;
              const languageLevelId = `languageLevel-${index}`;
              return (
                <div className="flex" key={`language-${index}`}>
                  <label htmlFor={languageId}>{`Language #${index + 1}`}</label>
                  <input
                    className="languageTitle"
                    type="text"
                    data-index={index}
                    name={languageId}
                    value={state.languages[index].languageTitle}
                    onChange={handleLanguageChange}
                  />
                  <label htmlFor={languageLevelId}>Level</label>
                  <select
                    className="languageLevel"
                    name={languageLevelId}
                    data-index={index}
                    value={state.languages[index].languageLevel}
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
            })}
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
                name="desiredJobCategory"
                value={state.desiredJobCategory || ""}
                onChange={handleChange}
              >
                <option defaultValue>Select one...</option>
                <option value="Legal">Legal</option>
                <option value="Education & Training">
                  Education & Training
                </option>
                <option value="Scientific & Engineering">
                  Scientific & Engineering
                </option>
              </select>
              <label className="item1" htmlFor="jobStatus">
                Job status
              </label>
              <select
                className="item2"
                name="desiredJobStatus"
                value={state.desiredJobStatus || ""}
                onChange={handleChange}
              >
                <option defaultValue>Select one...</option>
                <option value="Fixed Term">Fixed Term</option>
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
              </select>
              <label className="item1" htmlFor="desiredJobLocation">
                Job Location
              </label>
              <input
                type="text"
                name="desiredJobLocation"
                className="item2"
                value={state.desiredJobLocation || ""}
                onChange={handleChange}
              />
              <label className="item1" htmlFor="salaryRange">
                Salary Range
              </label>

              <select
                className="item2"
                name="desiredSalaryRange"
                value={state.desiredSalaryRange || ""}
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
            <label htmlFor="customFile">{filename}</label>
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={handleFileInput}
            />
          </div>{" "}
          <button>Submit</button>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </form>
      )}
    </>
  );
};

export default UpdateProfile;
