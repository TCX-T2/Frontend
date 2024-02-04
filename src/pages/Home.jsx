import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Profile from "../components/Profile.jsx";
import Historique from "../components/Historique.jsx";
import AddPatient from "../components/AddPatient.jsx";
import SideBar from "../components/Home/SideBar.jsx";
import NavbarUser from "../components/Home/NavbarUser.jsx";
import Password from "../components/Password.jsx";
import axios from "../config/axiosConfig.js";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const pageActive = window.location.pathname;

  // Redirect if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    } else {
      // check if the token is still valid
      axios
        .get("users/verifyToken", {
          headers: { "x-access-token": localStorage.getItem("token") },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
          localStorage.removeItem("token");
          window.location.href = "/signin";
        });
    }
  }, [token, navigate]);

  const getComponent = () => {
    switch (pageActive) {
      case "/dashboard":
        return <Dashboard />;
      case "/profile":
        return <Profile />;
      case "/password":
        return <Password />;
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

      <div className=" flex flex-col w-4/5">
        <NavbarUser />
        {getComponent()}
      </div>
    </div>
  );
};

export default Home;
