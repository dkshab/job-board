import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import HomeNonAuth from "../staticComponents/HomeNonAuth";

it("display tabs", () => {
  const history = createMemoryHistory();
  const { container, getByTestId, getByText } = render(
    <Router history={history}>
      <HomeNonAuth />
    </Router>
  );

  expect(getByText("Your next best career move"));

  fireEvent.click(getByText("Jobs by City"));
});
