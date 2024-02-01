import React, { useState } from "react";

const NavbarUser = () => {
  // get user name from local storage
  const userName = localStorage.getItem("Nom");
  const userSpeciality = localStorage.getItem("Speciality");
  const pageActive = window.location.pathname;

  // check if the variables are empty
  const [name, setName] = useState(userName ? userName : "Nom");
  const [speciality, setSpeciality] = useState(
    userSpeciality ? userSpeciality : "Speciality"
  );

  const getPage = () => {
    switch (pageActive) {
      case "/dashboard":
        return "Dashboard";
      case "/calendar":
        return "Calendrier";
      case "/profile":
        return "Mon profile";
      case "/historique":
        return "Historique";
      case "/addpatient":
        return "Ajouter un patient";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex justify-between items-center px-10 py-5 border-b-2 gap-10">
      <div>
        <h2 className="text-3xl font-bold font-poppins">{getPage()}</h2>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex gap-5">
          <img src="icons/notification.svg" alt="notification icon" />
          <img src="icons/help.svg" alt="help icon" />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm font-semibold opacity-50">{speciality}</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
