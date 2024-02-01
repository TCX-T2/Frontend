import React, { useState } from "react";

const NavbarUser = () => {
  // get user name from local storage
  const userName = localStorage.getItem("Nom");
  const userSpeciality = localStorage.getItem("Speciality");

  // check if the variables are empty
  const [name, setName] = useState(userName ? userName : "Nom");
  const [speciality, setSpeciality] = useState(
    userSpeciality ? userSpeciality : "Speciality"
  );

  return (
    <div className="flex justify-end items-center px-10 py-5 border-b-2 gap-10">
      <div className="flex gap-5">
        <img src="icons/notification.svg" alt="notification icon" />
        <img src="icons/help.svg" alt="help icon" />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm font-semibold opacity-50">{speciality}</p>
      </div>
    </div>
  );
};

export default NavbarUser;
