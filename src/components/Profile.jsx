import React from "react";
import NavbarUser from "./Home/NavbarUser";

const Profile = () => {
  return (
    <div className="flex flex-col w-4/5">
      <NavbarUser />
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl font-bold mb-5 text-center">Mon profile</h2>
        <div className="flex gap-10 items-center justify-center">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
              <label htmlFor="fullname">nom complet</label>
              <input
                type="text"
                name="fullname"
                placeholder="Nom"
                value={"John snow"}
                className="bg-gray-100  rounded-md p-5 h-9 w-full outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={"john@gmail.com"}
                className="bg-gray-100  rounded-md p-5 h-9 w-full outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
              <label htmlFor="password">mot de passe</label>
              <input
                type="password"
                name="password"
                placeholder="mot de passe"
                value={"********"}
                className="bg-gray-100  rounded-md p-5 h-9 w-full outline-none focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
              <label htmlFor="fullname">phone number</label>
              <input
                type="text"
                name="fullname"
                placeholder="Nom"
                value={"0540762334"}
                className="bg-gray-100  rounded-md p-5 h-9 w-full outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
              <label htmlFor="date">date of birth</label>
              <input
                type="date"
                name="date"
                placeholder="Date of birth"
                value={"1999-12-12"} // date format
                className="bg-gray-100  rounded-md p-5 h-9 w-full outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
              <label htmlFor="password">address</label>
              <input
                type="text"
                name="address"
                placeholder="address"
                value={"Bab errouar"}
                className="bg-gray-100  rounded-md p-5 h-9 w-full outline-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
