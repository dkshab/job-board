import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { storage, auth, firestore } from "../../firebase";
import * as ROUTES from "../../constants/routes";

class UpdateProfile extends Component {
  state = {
    personalDetails: {
      displayName: "",
      gender: "",
      title: "",
      ethnicity: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      citizenShip: "",
      southAfricanID: "",
      DOB: "",
      willingToRelocate: "",
      currentCity: "",
      disability: "",
      introduction: "",
      allowViewProfile: "",
    },
    workExperience: [
      {
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        industry: "",
      },
    ],
    education: [
      {
        graduationYear: "",
        institution: "",
        studyField: "",
        qualification: "",
      },
    ],
    skillsList: [{ skill: "", skillLevel: "" }],
    languagesList: [{ language: "", languageLevel: "" }],
    desiredJob: [
      {
        desiredJobLocation: "",
        desiredJobTitle: "",
        desiredJobCategory: "",
        desiredWorkType: "",
        desiredJobStatus: "",
        salaryRange: "",
      },
    ],
    noticePeriod: "",
    currentSalary: "",
  };
  imageInput = null;

  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`);
  }

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.history.push(ROUTES.PROFILE));
    const { displayName } = this.state;

    if (displayName) {
      this.userRef.update({ displayName });
    }

    if (this.file) {
      storage
        .ref()
        .child("user-profiles")
        .child(this.uid)
        .child(this.file.name)
        .put(this.file)
        .then((response) => response.ref.getDownloadURL())
        .then((photoURL) => this.userRef.update({ photoURL }));
    }

    this.setState({ displayName: "" }, () => {
      this.props.history.push(ROUTES.PROFILE);
    });
  };

  render() {
    const { displayName, gender, title, ethnicity } = this.state;

    return (
      <div className="UpdateProfile">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="gender">Gender</label>
          <select name="gender" onChange={this.handleChange} value={gender}>
            <option defaultValue>Select one...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="title">Title</label>
          <select name="title" onChange={this.handleChange} value={title}>
            <option defaultValue>Select one...</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Hon">Hon</option>
            <option value="Rev">Rev</option>
          </select>
          <label htmlFor="ethnicity">Ethnicity</label>
          <select
            name="ethnicity"
            onChange={this.handleChange}
            value={ethnicity}
          >
            <option defaultValue>Select one...</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Asian">Asian</option>
            <option value="Indian">Indian</option>
            <option value="Colored">Colored</option>
          </select>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            value={displayName}
            name="displayName"
            onChange={this.handleChange}
            placeholder="Display Name"
          />
          <input type="file" ref={(ref) => (this.imageInput = ref)} />
          <input value="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateProfile);
