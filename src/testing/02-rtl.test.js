import { render, screen } from "@testing-library/react";
import App from "../App";

test("Greeting Taufan is exist in our application", () => {
  render(<App />);
  const text = screen.getByText("Hello Taufan");
  expect(text).toBeInTheDocument();
});
