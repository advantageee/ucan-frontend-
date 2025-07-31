import { render, screen } from "@testing-library/react";
import ProjectManagement from "../pages/ProjectManagement";
import { BrowserRouter } from "react-router-dom";

test("renders project management page", () => {
  render(
    <BrowserRouter>
      <ProjectManagement />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Project Management/i);
  expect(linkElement).toBeInTheDocument();
});
