import React, { useState, useEffect } from "react";

import { firestore } from "../../../../utilities/firebase";

import { collectIdsAndDocs } from "../../../../utilities/firebaseDocs";

const ShortListedCandidates = ({ jobId }) => {
  //console.log(jobId);

  const [shortListApplicants, setShortListApplications] = useState([]);

  useEffect(() => {
    const fetchShortListApplicants = async () => {
      const snapshot = await firestore
        .collection(`jobs/${jobId}/applications/`)
        .where("action", "==", "short-list")
        .get();

      const shortListApplicants = snapshot.docs.map(collectIdsAndDocs);
      setShortListApplications(shortListApplicants);
    };

    fetchShortListApplicants();
  }, [jobId]);

  return (
    <div className="ShortListedCandidates">
      <h3> ShortListedCandidates </h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Candidate</th>
            <th scope="col">Current Role</th>
            <th scope="col">Current Employer</th>
            <th scope="col">City</th>
            <th scope="col">Resume</th>
          </tr>
        </thead>
        <tbody>
          {shortListApplicants &&
            shortListApplicants.map((applicant) => (
              <tr key={applicant.id}>
                <td data-th="Candidate">
                  {applicant.firstName} {applicant.surname}
                </td>
                <td data-th="Current Role">{applicant.jobTitle0}</td>
                <td data-th="Current Employer">{applicant.companyName0}</td>
                <td data-th="City">{applicant.currentCity}</td>
                <td data-th="Resume">
                  <a
                    href={applicant.resumeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShortListedCandidates;
