import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { addHabit } from "../redux/actions";

const AddHabitModal = ({ isOpen, onClose }) => {
  // State to store the input values for title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Event handler to update the title state when the input value changes
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Event handler to update the description state when the input value changes
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Get the list of habits from the Redux store
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  // Event handler for the submit button
  const handleSubmit = () => {
    if (title === "" || description === "") {
      //show error message
      setSuccessMsg("");
      setErrorMsg("All fields are mandatory");
      setOpen(true);
    } else {
      // Create a new date object representing today's date
      const today = new Date();
      const daysInWeek = 7;

      // Create an array of consistency objects for each day of the week
      const consistency = Array.from({ length: daysInWeek }, (_, index) => {
        // Calculate the date for each day in the week
        const date = new Date(today);
        date.setDate(today.getDate() - (daysInWeek - 1 - index));
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
        });

        // Here you can set the default status to "NONE" for each day
        return { day: formattedDate, status: "NONE" };
      });

      // Create a new habit object with the input values and the consistency array
      let temp = {
        id: habits.length + 1, // Increment the id for the new habit
        title,
        description,
        consistency,
      };

      // Dispatch the addHabit action with the new habit data to update the Redux store
      dispatch(addHabit(temp));
      //show success message
      setErrorMsg("");
      setSuccessMsg("Habit added");
      setOpen(true);
      // Close the modal after dispatching the habit
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <div>
      <Modal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isSmallScreen ? 300 : 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Habit
          </Typography>
          {/* Input field for the title */}
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
            margin="normal"
          />
          {/* Input field for the description */}
          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            margin="normal"
          />
          {/* Add other components related to setting habit days, if needed */}
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{ marginTop: "15px" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
      <Snackbar autoHideDuration={4000} open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={successMsg ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {successMsg ? successMsg : errorMsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddHabitModal;
