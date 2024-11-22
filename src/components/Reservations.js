import { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./Api";

const initialTimes = () => fetchAPI(new Date());

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIME":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

export const initializeTimes = (
  reservationsData,
  setReservationsData,
  dispatch
) => {
  return (name, value) => {
    setReservationsData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field
    }));
    if (name === "date") {
      dispatch({ type: "UPDATE_TIME", date: value });
    }
  };
};

const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initialTimes);
  const [reservationsData, setReservationsData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 2,
    occasion: "",
  });

  const handleChange = initializeTimes(
    reservationsData,
    setReservationsData,
    dispatch
  );

  return (
    <>
      <BookingForm
        reservationsData={reservationsData}
        handleTimeChange={handleChange}
        availableTimes={availableTimes}
        setReservationsData={setReservationsData}
      />
    </>
  );
};

export default Reservations;
