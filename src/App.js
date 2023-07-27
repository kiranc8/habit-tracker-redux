import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes' instead of 'Switch'
import { ThemeProvider } from "@mui/material/styles";
import LandingPage from "./components/LandingPage";
import store from "./redux/store";
import theme from "./components/theme";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router basename="habit-tracker-redux">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
