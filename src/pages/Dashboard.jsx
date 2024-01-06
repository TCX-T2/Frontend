import React from "react";
import axios from "axios";

const Dashboard = () => {
  // check if the user is logged in 
  if (!localStorage.getItem("token")) {
    window.location.href = "/signin";
  }

  //check which role the user has
  const roles = localStorage.getItem("roles");

  return (
    <div>
      {roles === "ROLE_ADULT" && <AdultDashboard />}
      {roles === "ROLE_ENFANT" && <ChildDashboard />}
      {roles === "ROLE_FORMATEUR" && <TrainerDashboard />}
    </div>
  );
};

export default Dashboard;
