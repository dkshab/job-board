import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import FooterNonAuth from "../staticComponents/FooterNonAuth";

describe("AboutNonAuth", () => {
  it("renders", () => {
    shallow(<FooterNonAuth />);
  });

  it("displays footer links", () => {
    const wrapper = mount(
      <Router>
        <FooterNonAuth />
      </Router>
    );
    expect(wrapper.find("ul")).toHaveLength(4);
    expect(wrapper.find("li")).toHaveLength(16);
  });
});
