// Action creator function to add a new habit to the state.
export const addHabit = (habit) => ({
  type: "ADD_HABIT", // Action type is "ADD_HABIT".
  payload: habit, // The habit object containing the data to be added to the state.
});

// Action creator function to update the status of a habit for a specific day.
export const updateHabitStatus = (habitId, date, status) => ({
  type: "UPDATE_HABIT_STATUS", // Action type is "UPDATE_HABIT_STATUS".
  payload: {
    // Payload contains the habitId, date, and status to be updated.
    habitId,
    date,
    status,
  },
});
