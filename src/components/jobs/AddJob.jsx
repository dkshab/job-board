import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { firestore } from "../../firebase";
import withUser from "../../providers/withUser";
import * as ROUTES from "../../constants/routes";

class AddJob extends Component {
  state = { title: "", description: "", company: "", type: "", location: "" };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { title, description, company, type, location } = this.state;
    const { user } = this.props;
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

    console.log(job);

    const resp = await firestore.collection("jobs").add(job);
    console.log(resp.id);
    this.setState(
      {
        title: "",
        description: "",
        company: "",
        type: "",
        location: "",
      },
      () => {
        this.props.history.push(ROUTES.PROFILE);
      }
    );
  };

  render() {
    const { title, description, company, type, location } = this.state;
    //console.log(this.props);

    return (
      <div className="AddJob">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Add Job</legend>
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="title">Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="type">Job Type</label>
            <select name="type" onChange={this.handleChange} value={type}>
              <option defaultValue>Select one...</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
              <option value="Temporary">Temporary</option>
            </select>
            <br />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="description">Job Description</label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(withUser(AddJob));
