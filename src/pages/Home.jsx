import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Calendar from "../components/Calendar.jsx";
import Profile from "../components/Profile.jsx";
import Historique from "../components/Historique.jsx";
import AddPatient from "../components/AddPatient.jsx";
import SideBar from "../components/Home/SideBar.jsx";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const pageActive = window.location.pathname;

  // Redirect if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  const getComponent = () => {
    switch (pageActive) {
      case "/dashboard":
        return <Dashboard />;
      case "/calendar":
        return <Calendar />;
      case "/profile":
        return <Profile />;
      case "/historique":
        return <Historique />;
      case "/addpatient":
        return <AddPatient />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className=" h-screen w-screen flex ">
      <SideBar />

      {getComponent()}
    </div>
  );
};

export default Home;
