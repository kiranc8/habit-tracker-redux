import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  // Styles for the root container
  const rootStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1976d2",
    color: "#ffffff",
  };

  // Styles for the quote text
  const quoteStyle = {
    fontSize: "2rem",
    marginBottom: "16px",
    textAlign: "center",
  };

  // Styles for the "Get Started" button
  const buttonStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#1976d2",
  };

  // React Router's hook to navigate to different routes
  const navigate = useNavigate();

  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    navigate("/dashboard"); // Navigate to the "/dashboard" route when clicked
  };

  return (
    <div style={rootStyle}>
      {/* Display the quote text */}
      <Typography variant="h3" component="h1" style={quoteStyle}>
        "The secret of getting ahead is getting started."
      </Typography>

      {/* Display the "Get Started" button */}
      <Button
        variant="contained"
        size="large"
        style={buttonStyle}
        onClick={handleGetStarted} // Call the handleGetStarted function on button click
      >
        Get Started
      </Button>
    </div>
  );
};

export default LandingPage;
