import React from "react";
import { shallow, mount } from "enzyme";

import AboutNonAuth from "../staticComponents/AboutNonAuth";

describe("AboutNonAuth", () => {
  it("renders", () => {
    shallow(<AboutNonAuth />);
  });

  it("displays about content", () => {
    const wrapper = mount(<AboutNonAuth />);
    const content = <p>Add something relevant here.</p>;
    expect(wrapper.contains(content));
  });
});
