import React, { useContext, useEffect, useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

import { UserContext } from "../../providers/UserProvider";
import { firestore, storage } from "../../firebase";

import useSetState from "../useSetState";
//import WrkExp from "./WrkExp";
import NewEducation from "./NewEducation";
import NewSkills from "./NewSkills";
import NewLanguages from "./NewLanguages";

import * as ROUTES from "../../constants/routes";
import WrkExp from "./WrkExp";

const initialState = {
  firstName: "",
  surname: "",
  email: "",
};

const blankWrkExp = { jobTitle: "", companyName: "" };

const WRK_EXPERIENCE_ADD = "EXPERIENCE_ADD";
const LOAD_WRK_EXPERIENCE = "LOAD_WRK_EXPERIENCE";
const HANDLE_WRK_EXP_CHANGE = "HANDLE_WRK_EXP_CHANGE";

const reducer = (state, action) => {
  if (action.type === WRK_EXPERIENCE_ADD) {
    return [{ ...blankWrkExp }, ...state];
  }

  if (action.type === HANDLE_WRK_EXP_CHANGE) {
    const updatedState = [...state];
    updatedState[action.payload.index][action.payload.className] =
      action.payload.value;

    return [...updatedState];
  }

  if (action.type === LOAD_WRK_EXPERIENCE) {
    return [...action.payload];
  }

  return state;
};

const UpdateProfile = () => {
  const history = useHistory();
  const user = useContext(UserContext);

  const [state, setState] = useSetState(initialState);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");

  // Work experience

  const [wrkExpState, dispatch] = useReducer(reducer, [{ ...blankWrkExp }]);

  // Education
  const blankEdu = { institution: "", graduationYear: "" };
  const [eduState, setEduState] = useState([{ ...blankEdu }]);

  // Skills
  const blankSkill = { skillTitle: "", skillLevel: "" };
  const [skillsState, setSkillsState] = useState([{ ...blankSkill }]);

  // Languages
  const blankLanguage = { languageTitle: "", languageLevel: "" };
  const [languagesState, setLanguagesState] = useState([{ ...blankLanguage }]);

  useEffect(() => {
    if (user && loading) {
      //console.log("We have a user!", user);

      const { workExperience, education, skills, languages } = user;
      //console.log(education);

      if (workExperience) {
        console.log("We have something", user.workExperience);
        dispatch({
          action: LOAD_WRK_EXPERIENCE,
          payload: {
            workExperience: workExperience,
          },
        });
      }

      if (education) {
        setEduState(education);
      }

      if (skills) {
        setSkillsState(skills);
      }

      if (languages) {
        setLanguagesState(languages);
      }

      setState(user);

      setLoading(false);
    }
  }, [loading, setState, user]);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  // Adding new sections
  const addWrkExp = (event) => {
    event.preventDefault();

    dispatch({ type: WRK_EXPERIENCE_ADD });

    // setWrkExpState([...wrkExpState, { ...blankWrkExp }]);
  };

  const addEducation = (event) => {
    event.preventDefault();

    setEduState([...eduState, { ...blankEdu }]);
  };

  const addSkill = (event) => {
    event.preventDefault();

    setSkillsState([...skillsState, { ...blankSkill }]);
  };

  const addLanguage = (event) => {
    event.preventDefault();

    setLanguagesState([...languagesState, { ...blankLanguage }]);
  };

  // Event handlers
  const handleWrkChange = (event) => {
    // const updatedWrkExp = [...wrkExpState];

    // updatedWrkExp[event.target.dataset.index][event.target.className] =
    //   event.target.value;
    dispatch({
      type: HANDLE_WRK_EXP_CHANGE,
      payload: {
        index: event.target.dataset.index,
        className: event.target.className,
        value: event.target.value,
      },
    });

    //setWrkExpState(updatedWrkExp);
  };

  const handleEduChange = (event) => {
    const updatedEduState = [...eduState];

    updatedEduState[event.target.dataset.index][event.target.className] =
      event.target.value;

    setEduState(updatedEduState);
  };

  const handleSkillChange = (event) => {
    const updatedSkillsState = [...skillsState];

    updatedSkillsState[event.target.dataset.index][event.target.className] =
      event.target.value;

    setSkillsState(updatedSkillsState);
  };

  const handleLanguageChange = (event) => {
    const updatedLanguageState = [...languagesState];

    updatedLanguageState[event.target.dataset.index][event.target.className] =
      event.target.value;

    setLanguagesState(updatedLanguageState);
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

      console.log(wrkExpState);

      // userRef.update(state);
      // userRef.update({ workExperience: wrkExpState });
      // userRef.update({ education: eduState });
      // userRef.update({ skills: skillsState });
      // userRef.update({ languages: languagesState });

      //   if (user.resumeURL) {
      //     let tempFileRef = storage.refFromURL(user.resumeURL);
      //     // deleting existing resume
      //     tempFileRef
      //       .delete()
      //       .then(() => {
      //         console.log("File deleted!");
      //         userRef.update({
      //           resumeURL: firebase.firestore.FieldValue.delete(),
      //         });
      //       })
      //       .catch((error) => {
      //         console.error(error);
      //       });
      //   }

      //   // Uploading new resume

      //   if (file) {
      //     storage
      //       .ref()
      //       .child("resumes")
      //       .child(user.uid)
      //       .child(filename)
      //       .put(file)
      //       .then((response) => response.ref.getDownloadURL())
      //       .then((resumeURL) => userRef.update({ resumeURL }))
      //       .then(() => {
      //         console.log("Resume uploaded!");
      //       });
      //   }

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

          {wrkExpState.map((val, index) => (
            <WrkExp
              key={`jobTitle-${index}`}
              wrkExpState={wrkExpState}
              index={index}
              handleWrkChange={handleWrkChange}
            />
          ))}
        </div>{" "}
        <div className="Profile--education">
          <h3>Education</h3>
          <button onClick={addEducation}>Add</button>
          {eduState.map((val, index) => (
            <NewEducation
              key={`education-${index}`}
              index={index}
              eduState={eduState}
              handleEduChange={handleEduChange}
            />
          ))}
        </div>{" "}
        <div className="Profile--skills">
          <h3>Skills</h3>
          <button onClick={addSkill}>Add</button>
          {skillsState.map((val, index) => (
            <NewSkills
              key={`skill-${index}`}
              index={index}
              skillsState={skillsState}
              handleSkillChange={handleSkillChange}
            />
          ))}
        </div>{" "}
        <div className="Profile--languages">
          <h3>Languages</h3>
          <button onClick={addLanguage}>Add</button>
          {languagesState.map((val, index) => (
            <NewLanguages
              key={`language-${index}`}
              languagesState={languagesState}
              index={index}
              handleLanguageChange={handleLanguageChange}
            />
          ))}
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
        </div>
        <button>Submit</button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </form>
    </>
  );
};

export default UpdateProfile;
