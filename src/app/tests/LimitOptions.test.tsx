import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LimitOptions from "../components/LimitOptions";

describe("LimitOptions Component", () => {
  const mockSetLimit = jest.fn();
  const mockSetPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders select component with correct initial value", () => {
    render(
      <LimitOptions limit={20} setLimit={mockSetLimit} setPage={mockSetPage} />
    );
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveTextContent("20");
  });

  test("calls setLimit and setPage with correct values when a new limit is selected", () => {
    render(
      <LimitOptions limit={20} setLimit={mockSetLimit} setPage={mockSetPage} />
    );
    fireEvent.mouseDown(screen.getByRole("combobox"));
    const option = screen.getByRole("option", { name: "10" });
    fireEvent.click(option);

    expect(mockSetLimit).toHaveBeenCalledWith(10);
    expect(mockSetPage).toHaveBeenCalledWith(1);
  });
});
