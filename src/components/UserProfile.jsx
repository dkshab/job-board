import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { storage } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import * as ROUTES from "../constants/routes";

const UserProfile = () => {
  const [resumeName, setResumeName] = useState("");
  const user = useContext(UserContext);
  //console.log(user);

  useEffect(() => {
    if (user) {
      if (user.resumeURL) {
        let resumeNameRef = storage.refFromURL(user.resumeURL);
        resumeNameRef
          .getMetadata()
          .then((metadata) => {
            //console.log(metadata.name);
            setResumeName(metadata.name);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [user]);

  return (
    <>
      {" "}
      <div className="TestProfile">
        <div className="avatar">
          <span className="far fa-user"></span>
        </div>
        <div className="info">
          <p>
            {user.title} {user.firstName} {user.surname}{" "}
          </p>
          <p>
            {user.gender} - {user.ethnicity} - {user.citizenship}{" "}
          </p>
          <p>Willing to relocate: {user.relocation}</p>
          <p>{user.DOB}</p>
          <div className="contact-info">
            <p>
              <span className="fas fa-envelope"></span> {user.email} &nbsp;
            </p>
            <p>
              {" "}
              <span className="fas fa-mobile-alt"></span> {user.phoneNumber}{" "}
              &nbsp;
            </p>
            <p>
              {" "}
              <span className="fas fa-map-marker-alt"></span> {user.currentCity}
            </p>
          </div>
        </div>
        <p className="intro">{user.introduction}</p>
      </div>
      <div className="TestWorkExperience">
        <h3>Work Experience</h3>
        <div className="Exp1">
          <h4> {user.jobTitle0}</h4>
          <p>
            {user.startDate0}/{user.endDate0}
          </p>
          <p> {user.companyName0}</p>
          <p>{user.industry0}</p>{" "}
        </div>
      </div>
      <div className="TestEducation">
        <div className="Edu1">
          <h3>Education</h3>
          <h4>{user.graduationInstitution0}</h4>
          <p>{user.graduationYear0}</p>
          <p>
            {" "}
            {user.qualification0} : {user.studyField0}
          </p>{" "}
        </div>
      </div>
      <div className="TestSkills">
        <h3> Skills</h3>
        <div className="Skill1">
          <p>
            <strong>{user.skillLevel0}</strong>{" "}
          </p>
          <p>{user.skillTitle0}</p>
        </div>
      </div>
      <div className="TestResume">
        <h3>Current Resume</h3>
        <p>
          {user && (
            <a target="_blank" rel="noopener noreferrer" href={user.resumeURL}>
              {resumeName}
            </a>
          )}
        </p>
      </div>
      <Link to={ROUTES.UPDATE_PROFILE}>
        <p>Update details</p>
      </Link>
    </>
  );
};

export default UserProfile;

/* <div className="UserProfile">
<div className="Profile--avatar">
  {user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
  {!user.photoURL && <span className="far fa-user"></span>}
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
</div> */
