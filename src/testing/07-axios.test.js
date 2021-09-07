import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "../App";

jest.mock("axios");
test("make user list users called by axios", async () => {
  const users = [
    {
      id: 1,
      name: "Taufan Fadhilah",
    },
    {
      id: 2,
      name: "Fadhilah Iskandar",
    },
    {
      id: 3,
      name: "Iskandar",
    },
  ];
  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: users,
    })
  );

  render(<App />);

  const btn = screen.getByTestId("get-user");
  userEvent.click(btn);

  await waitFor(() => {
    expect(screen.getAllByTestId("user-name")).toHaveLength(users.length);
  });
});
