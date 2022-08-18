import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from '../Header/Header';
import Main from '../../screens/MainScreen';
import AddPatient from '../../screens/AddPatient';
import AddAppointment from '../../screens/AddAppointment';
import Day from '../../screens/DayScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/day" element={<Day />} />
          <Route path="/new-patient" element={<AddPatient />} />
          <Route path="/new-appointment" element={<AddAppointment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
