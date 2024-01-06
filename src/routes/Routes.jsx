import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Home from "../pages/Home.jsx";
import Profile from "../components/Profile.jsx";
import Patient from "../pages/Patient.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/dashboard" element={<Home />}></Route>
      <Route path="/historique" element={<Home />}></Route>
      <Route path="/calendar" element={<Home />}></Route>
      <Route path="/addpatient" element={<Home />}></Route>
      <Route path="/profile" element={<Home />}></Route>
      <Route path="/patient" element={<Patient />}></Route>
    </Routes>
  );
};

export default Routers;
