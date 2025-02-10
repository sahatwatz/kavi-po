import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders the first title", () => {
  render(<App />);
  const title = screen.getByText(/React \+ Express/i);
  expect(title).toBeInTheDocument();
});

test("renders the second title", () => {
  render(<App />);
  const title = screen.getByText(/Viteq \+ React/i);
  expect(title).toBeInTheDocument();
});
