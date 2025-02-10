import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders the title", () => {
  render(<App />);
  const title = screen.getByText(/React \+ Express/i);
  expect(title).toBeInTheDocument();
});
