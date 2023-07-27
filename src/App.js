import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router basename='habit-tracker-redux/'>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/" element={<Navbar/>}/>
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
