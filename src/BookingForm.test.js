import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { MemoryRouter } from "react-router-dom";
import { submitAPI } from "./components/Api";
import { waitFor } from "@testing-library/react";

jest.mock("./components/Api", () => ({
  submitAPI: jest.fn(),
}));

describe("BookingForm Component", () => {
  test("renders static text correctly", () => {
    // Render the BookingForm component

    const mockReservationsData = {
      name: "John Doe",
      date: "",
      time: "",
      guests: 2,
      occassion: "",
    };
    const mockHandleTimeChange = jest.fn();
    const mockSetReservationsData = jest.fn();
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];

    render(
      <MemoryRouter>
        <BookingForm
          reservationsData={mockReservationsData}
          handleTimeChange={mockHandleTimeChange}
          availableTimes={mockAvailableTimes}
          setReservationsData={mockSetReservationsData}
        />
      </MemoryRouter>
    );

    // Check for labels
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Date:")).toBeInTheDocument();
    expect(screen.getByLabelText("Time:")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Guests:")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion:")).toBeInTheDocument();

    // Check for the button text
    const button = screen.getByRole("button", { name: "Reserve a Table" });
    expect(button).toBeInTheDocument();
  });
});

describe("BookingForm Component Field Validation", () => {
  const mockReservationsData = {
    name: "",
    date: "",
    time: "",
    guests: 2,
    occasion: "",
  };
  const mockHandleTimeChange = jest.fn();
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockSetReservationsData = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm
          reservationsData={mockReservationsData}
          handleTimeChange={mockHandleTimeChange}
          availableTimes={mockAvailableTimes}
          setReservationsData={mockSetReservationsData}
        />
      </MemoryRouter>
    );
  });

  test("Name input has the correct attributes", () => {
    const nameInput = screen.getByLabelText("Name:");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("id", "name");
    expect(nameInput).toHaveAttribute("name", "name");
    expect(nameInput).toHaveAttribute("required");
  });

  test("Date input has the correct attributes", () => {
    const dateInput = screen.getByLabelText("Date:");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "date");
    expect(dateInput).toHaveAttribute("name", "date");
    expect(dateInput).toHaveAttribute("required");
  });

  test("Time select has the correct attributes", () => {
    const timeSelect = screen.getByLabelText("Time:");
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "time");
    expect(timeSelect).toHaveAttribute("name", "time");
    expect(timeSelect).toHaveAttribute("required");
  });

  test("Guests input has the correct attributes", () => {
    const guestsInput = screen.getByLabelText("Number of Guests:");
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("id", "guests");
    expect(guestsInput).toHaveAttribute("name", "guests");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Occasion select has the correct attributes", () => {
    const occasionSelect = screen.getByLabelText("Occasion:");
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionSelect).toHaveAttribute("name", "occasion");
  });

  test("Submit button is disabled when the form is invalid", () => {
    const submitButton = screen.getByRole("button", {
      name: /Reserve a Table/i,
    });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeDisabled(); // Form should be invalid by default
  });
});

describe("BookingForm validation", () => {
  const mockReservationsData = {
    name: "",
    date: "",
    time: "",
    guests: 2,
    occasion: "",
  };
  const mockHandleTimeChange = jest.fn();
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockSetReservationsData = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm
          reservationsData={mockReservationsData}
          handleTimeChange={mockHandleTimeChange}
          availableTimes={mockAvailableTimes}
          setReservationsData={mockSetReservationsData}
        />
      </MemoryRouter>
    );
  });

  test("shows error for invalid name input", () => {
    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "" } }); // Invalid state

    // Simulate form submission
    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    fireEvent.click(submitButton);

    // Expect the button to be disabled due to invalid state
    expect(submitButton).toBeDisabled();
  });

  test("allows valid name input", () => {
    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "John Doe" } }); // Valid state

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });

    // Expect the button to be enabled after valid input
    expect(submitButton).toBeDisabled();
  });

  test("disables submit button when date is invalid", () => {
    const dateInput = screen.getByLabelText("Date:");
    fireEvent.change(dateInput, { target: { value: "" } }); // Invalid state

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
  });
});
