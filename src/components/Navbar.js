import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
} from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HabitsList from "./HabitsList";
import AddHabitModal from "./AddHabitModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const openModal = () => {
    setIsModalOpen(true);
    setIsDrawerOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
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

          {/* Render side menu on small screens */}
          {isSmallScreen ? (
            <Button onClick={handleDrawerToggle} color="inherit">
              ☰
            </Button>
          ) : (
            <Button startIcon={<AddCircleIcon />} onClick={openModal} color="inherit">
              Add Habit
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Side menu for small screens */}
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List>
          {/* Render "Add Habit" button in side menu */}
          <ListItem onClick={openModal}>
            <Button startIcon={<AddCircleIcon />} onClick={openModal} color="inherit">
              Add Habit
            </Button>
          </ListItem>
        </List>
      </SwipeableDrawer>

      {/* Component to display the list of habits */}
      <HabitsList />

      {/* Modal component to add a new habit */}
      <AddHabitModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
