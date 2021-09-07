import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing select elements", () => {
  test("showing all tag html inside App", () => {
    render(<App />);
    const txt = screen.getByText("Im hide");
    expect(txt).toBeInTheDocument();
  });

  test("the context is true on initial render", () => {
    render(<App />);
    const txt = screen.getByText("show");
    expect(txt).toBeInTheDocument();
  });
});

describe("selecting element to trigger fireEvent", () => {
  test("make sure text after clicked", () => {
    render(<App />);
    const btn = screen.getByText("show");
    fireEvent.click(btn);
    const txt = screen.getByText("Im show");
    expect(txt).toBeInTheDocument();
  });

  test("make sure text after clicked twice", () => {
    render(<App />);
    const btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);

    const btnResult = screen.getByText("hide");
    expect(btnResult).toBeInTheDocument();
  });
});
