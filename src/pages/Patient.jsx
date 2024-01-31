import React from "react";
import NavbarUser from "../components/NavbarUser";

const Patient = () => {
  return (
    <div className=" flex flex-col w-4/5">
      <NavbarUser />

      <form className="form mt-10 flex flex-col ">
        <div className="flex item-center">
          <div className="">
            <h1 className="text-black">Nom</h1>
            <input
              className="p-2 px-1 border-1 border rounded-md"
              type="text"
              placeholder="Entrer votre nom"
              required=""
            />
          </div>

          <div>
            <h1 className="text-black">Prénom</h1>
            <input
              className="p-2 px-1 border-1 border rounded-md"
              type="text"
              placeholder=" Entrer  votre prénom"
              required=""
            />
          </div>
        </div>

        <div>
          <h1 className="text-black">Address Email</h1>
          <input
            className="p-2 px-1 border-1 border rounded-md w-full"
            type="text"
            placeholder=" Entrer  votre address email"
            required=""
          />
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-black">Numero de telephone </h1>
            <input
              className="p-2 px-1 border-1 border rounded-md"
              type="text"
              placeholder=" Entrer  votre prénom"
              required=""
            />
          </div>

          <div className="flex-1">
            <h1 className="text-black ">Sexe</h1>
            <select name="Sexe" id="">
              <option value="sexe"> Homme</option>
              <option value="sexe"> Femme</option>
            </select>
          </div>
        </div>

        <div className="flex items-center">
          <label className="">
            <h1 className="text-black">Date de Naissance</h1>
            <input
              className="input"
              type="date"
              placeholder="DD/MM/YYYY "
              required=""
            />
          </label>

          <label className="flex-1">
            <h1 className="text-black ">Situation familiale</h1>
            <select name="Situation familiale" id="">
              <option value="sexe"> Célibatiare</option>
              <option value="sexe"> Marié</option>
              <option value="sexe"> Divorcé</option>
            </select>
          </label>
        </div>
        <div className="flex w-full  justify-end ">
          <button className="submit w-20  ">Suivant</button>
        </div>
      </form>
    </div>
  );
};

export default Patient;
