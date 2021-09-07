import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import CompUserEvent from "./CompUserEvent";

const MOCK_SUBMIT_BTN = jest.fn();

test("testinig onChange event when typing", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("input value");
  userEvent.type(input, "Taufan Fadhilah");
  expect(screen.getByText(/Anda mengetik Taufan Fadhilah/)).toBeInTheDocument();
});

test("test onClick on CompUserEvent", () => {
  render(<CompUserEvent onSubmit={MOCK_SUBMIT_BTN} />);
  const textSubmit = screen.getByTestId("text-submit");
  userEvent.click(textSubmit);
  expect(MOCK_SUBMIT_BTN).toHaveBeenCalled();
});
