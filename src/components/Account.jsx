import React from "react";

const Account = () => {
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
          <li className="sidenav__list-item">Item One</li>
          <li className="sidenav__list-item">Item Two</li>
          <li className="sidenav__list-item">Item Three</li>
          <li className="sidenav__list-item">Item Four</li>
          <li className="sidenav__list-item">Item Five</li>
        </ul>
      </aside>{" "}
      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>{" "}
          <div className="main-header__updates">Recent Items</div>
        </div>

        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>{" "}
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>{" "}
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>{" "}
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>{" "}
            <div className="overviewcard__info">Card</div>
          </div>
        </div>

        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
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
