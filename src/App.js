import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes' instead of 'Switch'
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import store from "./redux/store";
import theme from "./components/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router basename="habit-tracker-redux">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Navbar />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
