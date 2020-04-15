import React, { Component } from "react";
import moment from "moment";

import Modal from "../Modal";
import SignIn from "../SignIn";

class JobCard extends Component {
  state = { showModal: false };

  handleClick = () => {
    this.setState({ showModal: !this.state.showModal }, () => {
      console.log("Apply");
    });
  };
  render() {
    const { title, description, user, createdAt } = this.props;
    const { showModal } = this.state;

    return (
      <div className="JobCard">
        <div className="JobCard--Meta">
          <ul className="details">
            <li className="author">{user.displayName}</li>
            <li className="date">
              <span className="fas fa-calendar-week"></span>
              {moment(createdAt.toDate()).calendar()}
            </li>
          </ul>
        </div>
        <div className="JobCard--Description">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={this.handleClick}>Apply</button>
          {user ? "x user" : <SignIn />}
        </div>
      </div>
    );
  }
}

export default JobCard;
