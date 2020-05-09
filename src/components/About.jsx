import React, { useState } from "react";

const About = () => {
  const [showContent, setShowContent] = useState("candidates");

  const menu = [
    { id: 0, content: "Candidates" },
    { id: 1, content: "Short List" },
    { id: 2, content: "Schedule" },
  ];

  const [testMenu, setTestMenu] = useState(menu);

  const handleClick = (event) => {
    console.log(event.target.textContent.toLowerCase());
    const tempShowContent = event.target.textContent.toLowerCase();

    setShowContent(tempShowContent);
    const updatedTestMenu = menu.map((item) => ({
      ...item,
      isActive: event.target.id == item.id,
    }));
    console.log(updatedTestMenu);

    setTestMenu(updatedTestMenu);
  };

  return (
    <div>
      <h1>Tabs Demo</h1>

      <ol className="tabrow">
        {testMenu.map((menu, index) => (
          <li
            key={index}
            id={index}
            className={menu.isActive ? "selected" : ""}
            onClick={handleClick}
          >
            {menu.content}
          </li>
        ))}
      </ol>
      <p>{showContent}</p>
    </div>
  );
};

export default About;
