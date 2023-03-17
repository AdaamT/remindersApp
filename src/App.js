import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ReminderDetails from "./components/ReminderDetails";
import ReminderDueDates from "./components/ReminderDueDates";
import Error from "./components/Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reminderdetails" element={<ReminderDetails />} />
        <Route path="/reminderdates" element={<ReminderDueDates />} />
        <Route component={Error} />
      </Routes>
    </Router>
  );
};

export default App;
