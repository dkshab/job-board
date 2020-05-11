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
              </tr>
            ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(applications, null, 2)}</pre> */}
    </div>
  );
};

export default CandidatesList;
