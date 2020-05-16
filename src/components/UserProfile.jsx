import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { storage } from "../firebase";
import { UserContext } from "../providers/UserProvider";

import * as ROUTES from "../constants/routes";

const UserProfile = () => {
  const [resumeName, setResumeName] = useState("");
  const user = useContext(UserContext);

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
    <div className="UserProfile">
      {user && (
        <>
          <div className="Personal--Details">
            <div className="avatar">
              <span className="far fa-user"></span>
              <p className="username">
                {user.title} {user.firstName} {user.surname}{" "}
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
              <p>
                <Link className="update" to={ROUTES.UPDATE_PROFILE}>
                  Update Details
                </Link>
              </p>{" "}
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
              {user.workExperience.map((item, index) => (
                <div key={`WrkExpDiv-${index}`} className="WrkExpDiv">
                  <div className="left">
                    <p className="job-title"> {item.jobTitle}</p>
                    <p className="company-industry">
                      <span className="fas fa-building"></span>
                      {item.companyName}
                    </p>
                  </div>{" "}
                  <div className="right">
                    <p className="work-type">Full Time</p>
                    <p className="start-end">
                      <span className="fas fa-calendar"></span>
                      {user.startDate0}/{user.endDate0}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="Education">
              <h3>Education</h3>

              {user.education.map((item, index) => (
                <div key={`EduDiv-${index}`} className="EduDiv">
                  <div className="left">
                    <p className="qualification">
                      {item.qualification} : {item.fieldOfStudy}
                    </p>
                    <p>{item.institution}</p>
                  </div>
                  <div className="right">
                    {" "}
                    <p>
                      {" "}
                      <span className="fas fa-calendar"></span>{" "}
                      {item.graduationYear}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="Skills">
              <h3> Skills</h3>
              {user.skills.map((item, index) => (
                <div key={`SkillsDiv-${index}`} className="SkillsDiv">
                  <p className="Skill-title"> {item.skillTitle}</p>
                  <p>Level : {item.skillLevel}</p>
                </div>
              ))}
            </div>
            <div className="Languages">
              <h3>Languages</h3>
              {user.languages.map((item, index) => (
                <div key={`LanguageDiv-${index}`} className="LanguageDiv">
                  <p className="language-title">{item.languageTitle}</p>
                  <p>Level : {item.languageLevel}</p>
                </div>
              ))}
            </div>
            <div className="DesiredJob">
              <h3>Desired Job Criteria</h3>
              <p>
                <strong>Job location:</strong> {user.desiredJobLocation}
              </p>
              <p>
                <strong>Job title:</strong> {user.desiredJobTitle}
              </p>
              <p>
                <strong>Job category:</strong> {user.desiredJobCategory}
              </p>
              <p>
                <strong>Work type:</strong> {user.desiredJobStatus}
              </p>
              <p>
                <strong>Salary range:</strong> {user.desiredSalaryRange}
              </p>
            </div>
            <div className="NoticePeriod">
              <h3>Notice Period</h3>
              <p>{user.noticePeriod}</p>
            </div>
            <div className="CurrentSalary">
              <h3>Current Salary</h3>
              <p>{user.currentSalary}</p>
            </div>{" "}
            <div className="Resume">
              <h3>Current Resume</h3>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={user.resumeURL}
                >
                  {resumeName}
                </a>
              </p>
            </div>
            <Link className="button" to={ROUTES.UPDATE_PROFILE}>
              {" "}
              Update Details
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
