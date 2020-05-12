import React, { useEffect, useState } from "react";

import { firestore } from "../../firebase";
import { collectIdsAndDocs } from "../../utilities";

const CandidatesList = ({ jobId }) => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      const snapshot = await firestore
        .collection(`jobs/${jobId}/applications/`)
        .get();

      const applications = snapshot.docs.map(collectIdsAndDocs);
      setApplications(applications);
    };

    fetchApplications();
  }, [jobId]);

  const handleAction = (event) => {
    const applicantId = event.target.getAttribute("data-id");
    const action = event.target.getAttribute("name");

    const jobRef = firestore.doc(`jobs/${jobId}`);

    const applicationRef = jobRef.collection("applications").doc(applicantId);
    const actionTest = "my TEst";

    if (action) {
      applicationRef.update({ action });
    }

    console.log(event.target.getAttribute("name"));
  };

  return (
    <div className="CandidatesList">
      <h3>Candidates List</h3>
      <table className="CandidatesList--table">
        <thead>
          <tr className="header-row">
            <th scope="col">Name</th>
            <th scope="col">Current Role</th>
            <th scope="col">Current Employer</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications &&
            applications.map((applicant) => (
              <tr key={applicant.id}>
                <td data-th="Name">
                  {applicant.firstName} {applicant.surname}
                </td>
                <td data-th="Current Role">{applicant.jobTitle0}</td>
                <td data-th="Current Employer">{applicant.companyName0}</td>
                <td data-th="City">{applicant.currentCity}</td>
                <td data-th="Actions">
                  {" "}
                  <div className="actions">
                    <span
                      onClick={handleAction}
                      className="fas fa-thumbs-up"
                      data-id={applicant.id}
                      name="short-list"
                    ></span>
                    <span
                      onClick={handleAction}
                      className="fas fa-times"
                      data-id={applicant.id}
                      name="reject"
                    ></span>
                  </div>
                </td>
                <td data-th="Status">{applicant.action}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(applications, null, 2)}</pre> */}
    </div>
  );
};

export default CandidatesList;
