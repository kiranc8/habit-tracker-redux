import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const root = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1976d2",
    color: "white",
  };
  
  const quote = {
    fontSize: "2rem",
    textAlign: "center"
  }
    const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };
  return (
    <div style={root}>
      <Typography variant="h5" style={quote}>
        "The secret of getting ahead is getting started."
      </Typography>
      <Button
        variant="contained"
        size="medium"
        className="button"
        sx={{
          backgroundColor: "white",
          color: "#1976d2",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: "white",
            color: "#1976d2",
          },
        }}
        onClick={handleGetStarted}
      >
        Get Started
      </Button>
    </div>
  );
};

export default LandingPage;
