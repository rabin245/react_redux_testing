import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render the App component", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", {
      name: /vite \+ react/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render the Vite logo", () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/vite logo/i);
    expect(viteLogo).toBeInTheDocument();
  });

  it("should render the React logo", () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/react logo/i);
    expect(viteLogo).toBeInTheDocument();
  });

  it("should render List component in App component", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /this is a list/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
