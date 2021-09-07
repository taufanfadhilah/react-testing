import { render, screen } from "@testing-library/react";
import App from "../App";
import { data } from "./CompVariant";

test("testing using queryBy and findBy", async () => {
  render(<App />);
  const txt = screen.queryByText(/Selamat datang/);
  expect(txt).toBeNull();

  const txt2 = await screen.findByText(/Selamat datang/);
  expect(txt2).toBeInTheDocument();
});

test("doing render p as much as total days", () => {
  render(<App />);
  expect(screen.getAllByTestId("hari")).toHaveLength(data.length);
});
