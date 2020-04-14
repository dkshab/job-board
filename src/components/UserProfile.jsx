import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../providers/UserProvider";
import * as ROUTES from "../constants/routes";

const UserProfile = () => {
  const user = useContext(UserContext);
  return (
    <div className="UserProfile">
      <div className="Profile--avatar">
        {user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
      </div>
      <div className="UserProfile--username">
        <h2>{user.displayName}</h2>
        <p>
          <span>6</span> posts
        </p>
        <p>
          <span>22</span> followers
        </p>
        <p>
          <span>1999</span> following
        </p>
      </div>
      <p className="UserProfile--bio">Is a person</p>

      <Link to={ROUTES.UPDATE_PROFILE}>
        <p>Update details</p>
      </Link>
    </div>
  );
};

export default UserProfile;
