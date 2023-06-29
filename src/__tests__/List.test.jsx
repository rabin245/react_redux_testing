import { render, screen } from "@testing-library/react";
import List from "../components/List";

describe("List component", () => {
  it("should render the List component", () => {
    render(<List />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /this is a list/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
