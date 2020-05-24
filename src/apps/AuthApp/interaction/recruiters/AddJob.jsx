import React, { useState, useContext } from "react";

import { firestore } from "../../../../utilities/firebase";

import * as ROUTES from "../../../../constants/routes";
import { UserContext } from "../../../../providers/UserProvider";
import useSetState from "../../../../utilities/useSetState";
import { useHistory } from "react-router-dom";

const initialState = {
  title: "",
  company: "",
  duration: "",
  type: "",
  location: "",
  introduction: "",
  duties: "",
  salaryPackage: "",
  disclaimer: "",
  desiredExperience: "",
  description: "",
};

const AddJob = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  const [state, setState] = useSetState(initialState);

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, description, company, type, location } = state;
    const recruiter = user;

    const job = {
      title,
      description,
      company,
      type,
      location,
      recruiter,
      createdAt: new Date(),
      applications: 0,
    };

    // console.log(job);

    const resp = await firestore
      .collection("jobs")
      .add(job)
      .catch((error) => console.error(error));

    console.log(resp.id);

    // Clear form
    clear();
    history.push(ROUTES.ACCOUNT_RECRUITERS);
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="AddJob">
      <form className="AddJob--Form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add Job</legend>
          <div className="field">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="title">Company</label>
            <input
              type="text"
              name="company"
              value={state.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="duration">Job Duration</label>
            <select
              name="duration"
              onChange={handleChange}
              value={state.duration}
            >
              <option defaultValue>Select one...</option>
              <option value="Permanent">Permanent</option>
              <option value="Fixed Term">Fixed Term</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="type">Job Type</label>
            <select name="type" onChange={handleChange} value={state.type}>
              <option defaultValue>Select one...</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={state.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="introduction">Introduction</label>
            <textarea
              name="introduction"
              id="introduction"
              value={state.introduction}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="description">Job Description</label>
            <textarea
              name="description"
              id="description"
              value={state.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="duties">Duties & Responsibilities</label>
            <textarea
              name="duties"
              id="duties"
              value={state.duties}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="desiredExperience">
              Desired Experience & Qualifications
            </label>
            <textarea
              name="desiredExperience"
              id="desiredExperience"
              value={state.desiredExperience}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="salaryPackage">Package & Remuneration</label>
            <input
              type="text"
              name="salaryPackage"
              id="salaryPackage"
              value={state.salaryPackage}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="disclaimer">Disclaimer</label>
            <textarea
              name="disclaimer"
              id="disclaimer"
              value={state.disclaimer}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
