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
    //console.log(updatedTestMenu);

    setTestMenu(updatedTestMenu);
  };

  return (
    <div className="About">
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
      <hr />
      <h2>CSS Tab</h2>
      <div className="wrapper">
        <input
          type="radio"
          className="radio"
          name="group"
          id="one"
          defaultChecked
        />{" "}
        <input className="radio" id="two" name="group" type="radio" />
        <input className="radio" id="three" name="group" type="radio" />
        <div className="tabs">
          <label className="tab" id="one-tab" htmlFor="one">
            CSS
          </label>
          <label className="tab" id="two-tab" htmlFor="two">
            Skills
          </label>
          <label className="tab" id="three-tab" htmlFor="three">
            Prerequisites
          </label>
        </div>
        <div className="panels">
          <div className="panel" id="one-panel">
            <div className="panel-title">Why Learn CSS?</div>
            <p>
              Without CSS, every web page would be drab plain text and images
              that flowed straight down the page. With CSS, you can add color
              and background images and change the layout of your page — your
              web pages can feel like works of art!
            </p>
          </div>
          <div className="panel" id="two-panel">
            <div className="panel-title">Take-Away Skills</div>
            <p>
              You will learn many aspects of styling web pages! You’ll be able
              to set up the correct file structure, edit text and colors, and
              create attractive layouts. With these skills, you’ll be able to
              customize the appearance of your web pages to suit your every
              need!
            </p>
          </div>
          <div className="panel" id="three-panel">
            <div className="panel-title">Note on Prerequisites</div>
            <p>
              We recommend that you complete Learn HTML before learning CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
