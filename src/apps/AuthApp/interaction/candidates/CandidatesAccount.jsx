import React, { useContext, useState, useEffect } from "react";

import { UserContext } from "../../../../providers/UserProvider";
import Spinner from "../Spinner";
import CandidatesAccountContent from "../../../../components/candidates/CandidatesAccountContent";

const CandidatesAccount = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState("Settings");

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const handleClick = (event) => {
    //console.log(event.target.textContent);
    const tempShowContent = event.target.textContent;
    setShowContent(tempShowContent);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="CandidatesAccount">
          <aside>
            <ul>
              <li onClick={handleClick}>
                <span className="fas fa-columns"></span>Dashboard
              </li>
              <li onClick={handleClick}>
                <span className="far fa-id-card"></span>Saved Jobs
              </li>

              <li onClick={handleClick}>
                <span className="fas fa-search"></span>Search...
              </li>
            </ul>
            <div className="settings">
              <p onClick={handleClick}>
                <span className="fas fa-cogs"></span>Settings
              </p>
            </div>
          </aside>
          <div className="Content">
            <CandidatesAccountContent user={user} showContent={showContent} />
          </div>
        </div>
      )}
    </>
  );
};

export default CandidatesAccount;
