import React, { useContext } from "react";

import { UserContext } from "../providers/UserProvider";

const About = () => {
  const user = useContext(UserContext);
  //console.log(user);
  return (
    <div className="About">
      <h3>Testing ground for now</h3>
      {user && (
        <div className="About--Profile">
          <div className="Personal--Details">
            <div className="avatar">
              <span className="far fa-user"></span>
              <p className="username">
                {user.firstName} {user.surname}{" "}
              </p>
              <p className="job-title">{user.jobTitle0}</p>
            </div>
            <div className="info">
              <p className="item">
                <span className="fas fa-envelope"></span>
                {user.email}
              </p>{" "}
              <p>
                <span className="fas fa-map-marker-alt"></span>
                {user.currentCity}
              </p>{" "}
              <p>
                <span className="fas fa-briefcase"></span>
                {user.jobStatus}
              </p>{" "}
              <p>
                <span className="fas fa-users"></span>
                {user.jobCategory}
              </p>
              <a href={user.resumeURL} className="button">
                Download Resume
              </a>
            </div>
          </div>
          <div className="Background">
            <div className="introduction">
              <h3>Professional Summary</h3>
              <p> {user.introduction}</p>
            </div>
            <div className="WrkExperience">
              <h3>Work Experience</h3>
              <div className="WrkExpDiv">
                <div className="left">
                  <h4> {user.jobTitle0}</h4>
                  <p>
                    <span className="fas fa-building"></span>
                    {user.companyName0}
                  </p>
                  <p>{user.industry0}</p>
                </div>
                <div className="right">
                  <p>
                    {" "}
                    <span className="fas fa-calendar"></span>
                    {user.startDate0}/{user.endDate0}
                  </p>
                </div>
              </div>
            </div>
            <div className="Education">
              <h3>Education</h3>
              <h4>{user.graduationInstitution0}</h4>
              <p>{user.graduationYear0}</p>
              <p>
                {" "}
                {user.qualification0} : {user.studyField0}
              </p>{" "}
            </div>
            <div className="kills">
              <h3> Skills</h3>
              <div className="Skill1">
                <p>
                  <strong>{user.skillLevel0}</strong>{" "}
                </p>
                <p>{user.skillTitle0}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
