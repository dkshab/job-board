import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import NonAuthApp from "../NonAuthApp";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <NonAuthApp />
    </Router>
  );

  expect(getByText("Your next best career move"));
  expect(getByText("Sign In"));

  fireEvent.click(getByText("Sign In"));

  expect(getByText("Sign In With Google"));
});
