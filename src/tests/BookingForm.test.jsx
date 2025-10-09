import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest"; // <-- must import
import BookingForm from "../components/BookingForm";

describe("BookingForm validation", () => {
  it("shows error if name is empty", () => {
    const mockSetBookingData = vi.fn();
    render(<BookingForm setBookingData={mockSetBookingData} />);

    fireEvent.click(screen.getByText(/book table/i));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  });
});
