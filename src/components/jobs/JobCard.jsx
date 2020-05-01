import React, { Component } from "react";
import moment from "moment";

import Modal from "../Modal";
import withUser from "../../providers/withUser";
import { auth } from "../../firebase";

// const doesNotbelongsToCurrentUser = (currentUser, recruiter) => {
//   if (!currentUser) return false;
//   if (!recruiter) return false;
//   return currentUser.uid !== recruiter.uid;
// };

class JobCard extends Component {
  state = { showModal: false, email: "", password: "" };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleClick = () => {
    this.setState({ showModal: !this.state.showModal }, () => {
      console.log("Apply");
    });
  };

  // handleApply = () => {};

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.setState({ email: "", password: "" }, () => {
          console.log(response);
        });
      })
      .catch((error) => {
        console.error(error);
      });
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { title, description, recruiter, createdAt, user } = this.props;
    const { showModal, email, password } = this.state;
    // console.log(user);

    return (
      <div className="JobCard">
        <div className="JobCard--Meta">
          <ul className="details">
            <li className="author">{recruiter.displayName}</li>
            <li className="date">
              <span className="fas fa-calendar-week"></span>
              {moment(createdAt.toDate()).calendar()}
            </li>
          </ul>
        </div>

        <div className="JobCard--Description">
          <h2>{title}</h2>
          <p>{description}</p>
          {/* {doesNotbelongsToCurrentUser(user, recruiter) && (
            <button onClick={this.handleClick}>Apply</button>
          )} */}
          <button onClick={this.handleClick}> Apply</button>
          {showModal ? (
            user ? (
              <Modal>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" value={user.firstName} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="surname" value={user.surname} />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email-signin"
                  name="email"
                  value={user.email}
                  required
                />
                <label htmlFor="profile">Your Profile</label>
                <div className="profile-buttons">
                  <button>Preview</button>
                  <button>Edit Profile</button>
                </div>
                <label htmlFor="additionalDocuments">
                  Additional Documents
                </label>
                <input type="file" />

                <button>Send Application</button>
              </Modal>
            ) : (
              <Modal>
                <form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <legend>Sign In</legend>
                    <label htmlFor="email">Email</label>

                    <input
                      type="email"
                      id="email-signin"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password-signin"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                    <button className="signin" type="submit">
                      Sign In
                    </button>
                    <button onClick={this.handleClick}>Close</button>
                  </fieldset>
                </form>
              </Modal>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

export default withUser(JobCard);
