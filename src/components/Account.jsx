import React, { useContext, useState } from "react";

import { UserContext } from "../providers/UserProvider";
import AccountContent from "./recruiters/AccountContent";

const Account = () => {
  const user = useContext(UserContext);
  const [showContent, setShowContent] = useState("jobs");

  const handleClick = (event) => {
    console.log(event.target.textContent.toLowerCase());
    const tempShowContent = event.target.textContent.toLowerCase();
    setShowContent(tempShowContent);
  };

  return (
    <div className="Account">
      <div className="menu-icon">
        <span className="fas fa-bars"></span>
      </div>
      <header className="header">
        <div className="header__search">Search...</div>
        <div className="header__avatar">Your face</div>
      </header>{" "}
      <aside className="sidenav">
        <div className="sidenav__close-icon">
          <span className="fas fa-times sidenav_brand-close"></span>
        </div>{" "}
        <ul className="sidenav__list">
          {" "}
          <li className="sidenav__list-item" onClick={handleClick}>
            Dashboard
          </li>
          <li className="sidenav__list-item" onClick={handleClick}>
            Jobs
          </li>
          <li className="sidenav__list-item" onClick={handleClick}>
            Candidates
          </li>
          <li className="sidenav__list-item" onClick={handleClick}>
            Settings
          </li>
          <li className="sidenav__list-item" onClick={handleClick}>
            Sign Out
          </li>
        </ul>
      </aside>{" "}
      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello {user.displayName} </div>{" "}
          <div className="main-header__updates">
            Recent Items
            <p>{showContent}</p>
          </div>
        </div>

        <div className="main-cards">
          <AccountContent showContent={showContent} />
        </div>
      </main>
      <footer className="footer">
        <div className="footer__copyright">&copy; 2020 jobhunt.io</div>
        <div className="footer__signature">Made with love by pure genius</div>
      </footer>
    </div>
  );
};

export default Account;
