import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import EnterPage from '../pages/EnterPage';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import ProtectedRoute from "./ProtectedRoute";
import ConfirmPass from '../pages/ConfirmPass';

function Routs() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
        <Route path="/enter" element={<ProtectedRoute><EnterPage /></ProtectedRoute>} />
        <Route path="/reset" element={<ProtectedRoute><ResetPassword /></ProtectedRoute>} />
        <Route path="/resetpass" element={<ProtectedRoute><ConfirmPass /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default Routs;
