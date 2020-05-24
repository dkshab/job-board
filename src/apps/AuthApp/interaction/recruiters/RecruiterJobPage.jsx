import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { firestore } from "../../../../utilities/firebase";
import { collectIdsAndDocs } from "../../../../utilities/firebaseDocs";
import CandidateContents from "./CandidatesContent";
import * as ROUTES from "../../../../constants/routes";

const RecruiterJobPage = (props) => {
  // Getting the job Id from react router params
  const { id } = useParams();

  // Handling job state
  const [job, setJob] = useState(null);

  // Tabs and their state handling
  const initialTabMenu = [
    { id: 0, content: "Candidates" },
    { id: 1, content: "Short List" },
    { id: 2, content: "Schedule" },
  ];
  const [tabMenu, setTabMenu] = useState(initialTabMenu);

  // Handling Tab content
  const [showContent, setShowContent] = useState("Candidates");

  useEffect(() => {
    // Creating a reference for the job for cloud firestore
    const jobRef = firestore.doc(`jobs/${id}`);

    jobRef.onSnapshot((snapshot) => {
      const job = collectIdsAndDocs(snapshot);
      setJob(job);
    });
  }, [id]);

  const handleTabClick = (event) => {
    //console.log(typeof +event.target.id);
    const updatedTabMenu = tabMenu.map((item) => ({
      ...item,
      isActive: +event.target.id === item.id,
    }));

    // Changing Tab Content after clicking a tab
    const tempShowContent = event.target.textContent.toLowerCase();

    setShowContent(tempShowContent);
    setTabMenu(updatedTabMenu);
  };

  return (
    <div className="RecruiterJobPage">
      RecruiterJobPage
      <div className="RedirectToDashboard">
        <p>
          <Link to={ROUTES.ACCOUNT_RECRUITERS}>
            <span className="fas fa-arrow-left"></span> Back to Dashboard
          </Link>
        </p>
      </div>
      {job && (
        <>
          <h3>Tabs</h3>
          <div className="Tabs">
            <div className="Tabs--row">
              {tabMenu.map((menu, index) => (
                <label
                  key={index}
                  id={index}
                  className={`tab ${menu.isActive ? "selected" : ""}`}
                  onClick={handleTabClick}
                >
                  {menu.content}
                </label>
              ))}
            </div>
            <div className="Tabs--panels">
              <CandidateContents jobId={job.id} showContent={showContent} />
            </div>
          </div>
          <div className="Job--details">
            <h3>Job Details</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default RecruiterJobPage;
