import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import AddIcon from "@mui/icons-material/Add";
import AddHabitModal from "./AddHabitModal";
import HabitsList from "./HabitsList";


const Navbar = () => {
  // State to manage the visibility of the AddHabitModal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the AddHabitModal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the AddHabitModal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* App bar containing the logo and "Add Habit" button */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Box to display the logo and title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BubbleChartIcon sx={{ marginRight: 1 }} />
            <span>Habit Tracker</span>
          </Box>
          {/* Box to display the "Add Habit" button */}
          <Box>
            <Button startIcon={<AddIcon />} onClick={openModal} color="inherit">
              Add Habit
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Component to display the list of habits */}
      <HabitsList />
      
      {/* Modal component to add a new habit */}
      <AddHabitModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
