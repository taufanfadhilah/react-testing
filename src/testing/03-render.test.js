import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("showing all tag html inside App", () => {
  render(<App />);
  //   screen.debug();
  const btn = screen.getAllByRole("button")[0];
  fireEvent.click(btn);
  //   screen.debug();
});
