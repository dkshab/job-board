import React, { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const About = () => {
  // Tabs and their state handling
  const initialTabMenu = [
    { id: 0, content: "Sign In" },
    { id: 1, content: "Sign Up" },
  ];

  const [tabMenu, setTabMenu] = useState(initialTabMenu);

  // Handling Tab content
  const [showContent, setShowContent] = useState("Sign Up");

  const handleTabClick = (event) => {
    //console.log(typeof +event.target.id);
    const updatedTabMenu = tabMenu.map((item) => ({
      ...item,
      isActive: +event.target.id === item.id,
    }));

    // Changing Tab Content after clicking a tab
    const tempShowContent = event.target.textContent;

    setShowContent(tempShowContent);
    setTabMenu(updatedTabMenu);
  };

  return (
    <div className="About">
      <h3>Testing ground for now yes</h3>

      <div className="Tabs">
        <div className="Tabs--row">
          {tabMenu.map((menu, index) => (
            <label
              key={index}
              id={index}
              className={`tab ${menu.isActive ? "selected" : ""}`}
              onClick={handleTabClick}
              htmlFor={menu.content}
            >
              {menu.content}
            </label>
          ))}
        </div>
        <div className="Tabs--panels">
          {showContent === "Sign In" ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default About;
