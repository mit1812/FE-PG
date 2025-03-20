import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Paginator from "../components/Paginator";

describe("Paginator Component", () => {
  const mockSetPage = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders pagination component", () => {
    render(<Paginator totalPages={5} page={1} setPage={mockSetPage} />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("calls setPage with correct value when a page is clicked", () => {
    render(<Paginator totalPages={5} page={1} setPage={mockSetPage} />);

    const pageTwoButton = screen.getByRole("button", { name: "Go to page 2" });
    fireEvent.click(pageTwoButton);

    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  test("displays the correct number of pages", () => {
    render(<Paginator totalPages={5} page={1} setPage={mockSetPage} />);
    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(7); // 5 total pages + 2 left and right arrows
  });
});
