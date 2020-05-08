import React, { Component } from "react";
import moment from "moment";

import Modal from "../Modal";
import withUser from "../../providers/withUser";
import { auth, storage, firestore } from "../../firebase";

class JobCard extends Component {
  state = { showModal: false, email: "", password: "", resumeName: "Try" };

  get jobId() {
    return this.props.id;
  }

  get jobRef() {
    return firestore.doc(`jobs/${this.jobId}`);
  }

  get jobApplicationsRef() {
    return this.jobRef.collection("applications");
  }

  componentDidMount = () => {
    const { user } = this.props;

    if (user) {
      if (user.resumeURL) {
        let tempFileRef = storage.refFromURL(user.resumeURL);

        tempFileRef.getMetadata().then((metadata) => {
          console.log(metadata);
          this.setState({ resumeName: metadata.name });
        });
      }
    }

    this.setState({ resume: "Yes" });
    // console.log(user);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleClick = () => {
    this.setState({ showModal: !this.state.showModal }, () => {
      console.log(this.props);
    });
  };

  handleSignIn = async (event) => {
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

  handleApply = (event) => {
    event.preventDefault();

    const { user } = this.props;
    this.jobApplicationsRef.add(user);

    this.setState({ showModal: !this.state.showModal }, () => {
      console.log(this.props);
    });
  };

  render() {
    const { title, description, recruiter, createdAt, user } = this.props;
    const { showModal, email, password, resumeName } = this.state;
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

          <button onClick={this.handleClick}> Apply</button>
          {showModal ? (
            user ? (
              <Modal>
                <form onSubmit={this.handleApply}>
                  <fieldset>
                    {" "}
                    <legend>Apply</legend>
                    <div className="field">
                      {" "}
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="surname"
                        value={user.surname}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email-signin"
                        name="email"
                        value={user.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="profile">
                      <label htmlFor="profile">Your Profile</label>
                      <h4>Resume</h4>
                      <p>
                        {user && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={user.resumeURL}
                          >
                            {resumeName}
                          </a>
                        )}
                      </p>
                    </div>{" "}
                    <div className="additionalDocuments">
                      <label htmlFor="additionalDocuments">
                        Additional Documents
                      </label>
                      <input type="file" />
                    </div>
                    <button type="submit">Send Application</button>{" "}
                    <button onClick={this.handleClick}>Close</button>
                  </fieldset>
                </form>
              </Modal>
            ) : (
              <Modal>
                <form onSubmit={this.handleSignIn}>
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
