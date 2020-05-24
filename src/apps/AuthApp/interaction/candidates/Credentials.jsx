import React from "react";
import { Link } from "react-router-dom";

const Credentials = ({ user }) => {
  //console.log(user);

  const handleChange = (event) => {
    console.log(event.target);
  };

  return (
    <div className="Credentials">
      <h3>Account Settings</h3>

      <form className="CredentialsForm">
        <div className="field">
          <label className="item1" htmlFor="email">
            Email
          </label>
          <input
            className="item2"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div className="field">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input type="password" />
        </div>
        <button type="submit">Update</button>
      </form>
      <p>
        <Link to="/profile">View Profile</Link>
      </p>
    </div>
  );
};

export default Credentials;
