import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";
import Patient from "../pages/Patient.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/patient" element={<Patient />}></Route>
    </Routes>
  );
};

export default Routers;
