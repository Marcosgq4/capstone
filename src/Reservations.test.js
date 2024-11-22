import { updateTimes, initializeTimes } from "./components/Reservations";
import { fetchAPI } from "./components/Api";

// Mock initialTimes function
jest.mock("./components/Api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe("updateTimes function", () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });

  test("returns availableTimes when UPDATE_TIME action is dispatched", () => {
    // Arrange
    const mockAvailableTimes = ["17:00", "17:30", "18:00"];
    fetchAPI.mockReturnValue(mockAvailableTimes);
    const action = { type: "UPDATE_TIME" };
    const currentState = [];

    // Act
    const newState = updateTimes(currentState, action);

    // Assert
    expect(newState).toEqual(mockAvailableTimes); // Assert that newState matches the mocked available times
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test("returns the current state for an unknown action", () => {
    // Arrange
    const mockAvailableTimes = ["17:00", "17:30", "18:00"];
    fetchAPI.mockReturnValue(mockAvailableTimes);
    const action = { type: "UNKNOWN_ACTION" };
    const currentState = mockAvailableTimes;

    // Act
    const newState = updateTimes(currentState, action);

    // Assert
    expect(newState).toEqual(currentState);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});

describe("initializeTimes function", () => {
  test("updates reservationsData correctly", () => {
    // Arrange
    const reservationsData = {
      name: "",
      date: "",
      time: "",
      guests: 2,
      occasion: "",
    };

    const setReservationsData = jest.fn();
    const dispatch = jest.fn();

    // Call `initializeTimes` with mocks
    const handleChange = initializeTimes(
      reservationsData,
      setReservationsData,
      dispatch
    );

    // Simulate changing the date
    const name = "date";
    const value = "2023-11-16";
    handleChange(name, value);

    // Retrieve the actual function passed to `setReservationsData`
    expect(setReservationsData).toHaveBeenCalledWith(expect.any(Function));
    const setStateCallback = setReservationsData.mock.calls[0][0];

    // Simulate calling the update function with previous state
    const updatedState = setStateCallback(reservationsData);

    // Assert
    expect(updatedState).toEqual({
      ...reservationsData,
      [name]: value,
    });

    // Assert that dispatch is called for "date"
    expect(dispatch).toHaveBeenCalledWith({ type: "UPDATE_TIME", date: value });
  });
});
