import React, { useEffect, useState } from "react";
import { submitAPI } from "./Api";
import { useNavigate } from "react-router-dom";

const BookingForm = ({
  reservationsData,
  handleTimeChange,
  availableTimes,
  setReservationsData,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleTimeChange(name, value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setReservationsData({
      name: "",
      date: "",
      time: "",
      guests: 2,
      occasion: "",
    });

    const isSubmitted = submitAPI(reservationsData);
    if (isSubmitted) {
      navigate("/confirmed"); // Navigate to the confirmation page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("Failed to confirm booking. Please try again.");
    }
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, date, time, guests } = reservationsData;
    if (name && date && time && guests) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [reservationsData]);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setReservationsData((prev) => ({
      ...prev,
      date: getTodayDate(),
    }));
  }, [setReservationsData]);

  return (
    <section id="reservations">
      <form className="reservation-form" onSubmit={handleSubmit}>
        <h1 className="heading">Reserve a Table</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
          value={reservationsData.name}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          required
          value={reservationsData.date}
          min={getTodayDate()}
        />

        <label htmlFor="time">Time:</label>
        <select
          id="time"
          name="time"
          onChange={handleChange}
          required
          value={reservationsData.time}
        >
          <option value="">-- Select Time --</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          onChange={handleChange}
          required
          value={reservationsData.guests}
          min={1}
          max={10}
        />

        <label htmlFor="occasion">Occasion:</label>
        <select
          type="text"
          id="occasion"
          name="occasion"
          onChange={handleChange}
          value={reservationsData.occasion}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Wedding">Wedding</option>
          <option value="Business">Business</option>
          <option value="Casual">Casual</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" disabled={!isFormValid}>
          Reserve a Table
        </button>
      </form>
    </section>
  );
};
export default BookingForm;
