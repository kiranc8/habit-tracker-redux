import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { updateHabitStatus } from "../redux/actions"; // Import the action and status constants
import { DONE, NOT_DONE, NONE } from "../constants/habitStatus";

const HabitsList = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // Get the list of habits from the Redux store
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  // Function to handle the icon button click
  const handleStatusChange = (habitId, dayIndex) => {
    // Find the habit with the specified habitId
    const habit = habits.find((habit) => habit.id === habitId);
    const day = habit.consistency[dayIndex];
    let newStatus;

    // Determine the new status based on the current status of the day
    if (day.status === DONE) {
      newStatus = NOT_DONE;
    } else if (day.status === NOT_DONE) {
      newStatus = NONE;
    } else {
      newStatus = DONE;
    }

    // Dispatch the action to update the habit status
    dispatch(updateHabitStatus(habitId, day.day, newStatus));
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {habits.map((habit) => (
        <Box
          key={habit.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 4,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            width: isSmallScreen ? "80%" : "90%",
            marginTop: isSmallScreen ? "15px" : "25px",
            marginBottom: isSmallScreen ? "15px" : "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 1,
              marginLeft: "calc(100% / 17)",
            }}
          >
            {/* Display habit title */}
            <Typography
              variant="h6"
              component="div"
              sx={{ marginRight: 1, fontSize: isSmallScreen ? "14px" : "20px" }}
            >
              {habit.title}
            </Typography>
            :{/* Display habit description */}
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ marginLeft: 1, fontSize: isSmallScreen ? "13px" : "18px" }}
            >
              {habit.description}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {habit.consistency.map((day, dayIndex) => (
              <Box
                key={dayIndex}
                sx={{ textAlign: "center", width: "calc(100% / 7)" }}
              >
                {/* Display day */}
                <Typography variant="body2" color="textSecondary">
                  {day.day}
                </Typography>
                {/* Display icon button for changing status */}
                <IconButton
                  onClick={() => handleStatusChange(habit.id, dayIndex)}
                  color={day ? "primary" : "default"}
                  sx={{ marginRight: 1 }}
                >
                  {day.status === DONE ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : day.status === NOT_DONE ? (
                    <CancelIcon style={{ color: "red" }} />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HabitsList;
