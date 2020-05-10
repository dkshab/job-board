import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { firestore } from "../../firebase";
import { collectIdsAndDocs } from "../../utilities";

const RecruiterJobPage = (props) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const jobRef = firestore.doc(`jobs/${id}`);

  useEffect(() => {
    jobRef.onSnapshot((snapshot) => {
      const job = collectIdsAndDocs(snapshot);
      setJob(job);
    });
  }, [jobRef]);

  return (
    <div>
      RecruiterJobPage
      {job.title}
    </div>
  );
};

export default RecruiterJobPage;
