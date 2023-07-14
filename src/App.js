import React, { useEffect } from 'react';
import "./App.scoped.scss";
import RouteMap from "./Router/router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile"
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserSelectionScreen from './components/UserSelectionScreen/UserSelectionScreen';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animation (in milliseconds)
      easing: 'ease-in-out', // Easing function for animation
      offset: 100, // Offset (in pixels) from the element's top before animation triggers
      delay: 100, // Delay (in milliseconds) before animation starts
    });
  }, []);

  return (
    <Router>
      <Routes>
        {RouteMap().map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/profile" element={<Profile />} />
        <Route path="/userSelection" element={<UserSelectionScreen />} />

      </Routes>
    </Router>
  );
}

export default App;
