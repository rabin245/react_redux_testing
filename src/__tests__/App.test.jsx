import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render the App component", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", {
      name: /vite \+ react/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
