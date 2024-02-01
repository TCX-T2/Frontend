import React from "react";
import NavbarUser from "./Home/NavbarUser";

const Profile = () => {
  return (
    <div className="flex flex-col gap-6 p-10 px-20 w-3/5">
      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-5">
          <label htmlFor="Nom">Nom</label>
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            value={"Einstein"}
            className=" border-[1.5px] border-neutral-300 w-[17rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="Prenom">Prenom</label>
          <input
            type="text"
            name="Prenom"
            placeholder="Prenom"
            value={"Albert"}
            className=" border-[1.5px] border-neutral-300 w-[17rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <label htmlFor="Adressemail">Adresse mail</label>
        <input
          type="text"
          name="Adressemail"
          placeholder="Adressemail"
          value={"AlbertEinstein1883@gmail.com"}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-5">
          <label htmlFor="numerotel">Numéro de téléphone</label>
          <input
            type="text"
            name="numerotel"
            placeholder="numerotel"
            value={"0561002332"}
            className=" border-[1.5px] border-neutral-300 w-[17rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="Specialite">Spécialité</label>
          <input
            type="text"
            name="Specialite"
            placeholder="Specialite"
            value={"Chirugien"}
            className=" border-[1.5px] border-neutral-300 w-[17rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <label htmlFor="utilisateur">Nom utilisateur</label>
        <input
          type="text"
          name="utilisateur"
          placeholder="utilisateur"
          value={"AlbertEinstein1883"}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
    </div>
  );
};

export default Profile;
