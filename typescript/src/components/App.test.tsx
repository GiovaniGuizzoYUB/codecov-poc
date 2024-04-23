import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <App flag1 />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link with false flag", () => {
  render(
    <MemoryRouter>
      <App flag2 />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
