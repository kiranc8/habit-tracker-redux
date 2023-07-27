// Import the constants for habit status from the "../constants/habitStatus" file.
import { DONE, NOT_DONE, NONE } from "../constants/habitStatus";

// Define the initial state for the habits in the Redux store.
const initialState = {
  habits: [
    {
      id: 1,
      title: "Exercise",
      description: "Do 30 minutes of exercise daily",
      // Use Array.from to create an array with 7 elements, representing 7 days.
      consistency: Array.from({ length: 7 }, (_, index) => {
        // Create a new Date object to get the current date.
        const today = new Date();
        // Modify the date to get the date of the previous 7 days by subtracting the appropriate number of days based on the index.
        today.setDate(today.getDate() - (6 - index));
        // Create an object for each day with the formatted date and initial status based on the index.
        return {
          day: today.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          }),
          status:
            index === 1 || index === 3 || index === 4
              ? DONE
              : index === 5
              ? NOT_DONE
              : NONE,
        };
      }),
    },
    {
      id: 2,
      title: "Reading",
      description: "Read a book for 30 minutes daily",
      // Similar to the first habit, create an array of 7 elements representing 7 days.
      consistency: Array.from({ length: 7 }, (_, index) => {
        const today = new Date();
        today.setDate(today.getDate() - (6 - index));
        // Create an object for each day with the formatted date and initial status based on the index.
        return {
          day: today.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          }),
          status:
            index === 1 || index === 4 ? DONE : index === 5 ? NOT_DONE : NONE,
        };
      }),
    },
  ],
};

// Define the habitReducer function that will handle actions and update the state accordingly.
const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      // When a new habit is added, update the state with the new habit data.
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case "UPDATE_HABIT_STATUS":
      // When the status of a habit is updated, find the habit with the given ID and update the status for the corresponding day.
      const { habitId, date, status } = action.payload;
      const updatedHabits = state.habits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              consistency: habit.consistency.map((day) =>
                day.day === date ? { ...day, status } : day
              ),
            }
          : habit
      );
      return {
        ...state,
        habits: updatedHabits,
      };
    default:
      // If the action type is not recognized, return the current state.
      return state;
  }
};

// Export the habitReducer function so that it can be used to create the Redux store.
export default habitReducer;
