import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../config/axiosConfig.js";

const Profile = () => {
  // recover the user's information from the localStorage
  var Nom = localStorage.getItem("Nom");
  var Prenom = localStorage.getItem("Prenom");
  var Adressemail = localStorage.getItem("mail");
  var numerotel = localStorage.getItem("PhoneNumber");
  var Specialite = localStorage.getItem("Specialite");
  var utilisateur = localStorage.getItem("Username");
  const token = localStorage.getItem("token");

  // check if one of the information is null? if yes, then retreive the information from the server
  if (
    !Nom ||
    !Prenom ||
    !Adressemail ||
    !numerotel ||
    !Specialite ||
    !utilisateur
  ) {
    console.log("here");
    axiosInstance
      .get("users/profile", { headers: { "x-access-token": token } })
      .then((response) => {
        localStorage.setItem("Nom", response.data.Nom);
        localStorage.setItem("Prenom", response.data.Prenom);
        localStorage.setItem("mail", response.data.mail);
        localStorage.setItem("PhoneNumber", response.data.PhoneNumber);
        localStorage.setItem("Specialite", response.data.Specialite);
        localStorage.setItem("Username", response.data.Username);
      })
      .catch((error) => {
        console.error(error);
      });

    Nom = localStorage.getItem("Nom");
    Prenom = localStorage.getItem("Prenom");
    Adressemail = localStorage.getItem("mail");
    numerotel = localStorage.getItem("PhoneNumber");
    Specialite = localStorage.getItem("Specialite");
    utilisateur = localStorage.getItem("Username");
  }

  const formik = useFormik({
    initialValues: {
      Nom: Nom,
      Prenom: Prenom,
      Adressemail: Adressemail,
      numerotel: numerotel,
      Specialite: Specialite,
      utilisateur: utilisateur,
    },

    // validation of the form
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 p-10 px-20 w-4/5 m-auto"
    >
      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-2">
          <label htmlFor="Nom">Nom</label>
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            value={formik.values.Nom}
            onChange={formik.handleChange}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Prenom">Prenom</label>
          <input
            type="text"
            name="Prenom"
            placeholder="Prenom"
            value={formik.values.Prenom}
            onChange={formik.handleChange}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Adressemail">Adresse mail</label>
        <input
          type="text"
          name="Adressemail"
          placeholder="Adressemail"
          value={formik.values.Adressemail}
          onChange={formik.handleChange}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-2">
          <label htmlFor="numerotel">Numéro de téléphone</label>
          <input
            type="text"
            name="numerotel"
            placeholder="numerotel"
            value={formik.values.numerotel}
            onChange={formik.handleChange}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Specialite">Spécialité</label>
          <input
            type="text"
            name="Specialite"
            placeholder="Specialite"
            value={formik.values.Specialite}
            onChange={formik.handleChange}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="utilisateur">Nom utilisateur</label>
        <input
          type="text"
          name="utilisateur"
          placeholder="utilisateur"
          value={formik.values.utilisateur}
          onChange={formik.handleChange}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div className="flex gap-10 items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => (window.location.href = "/signup")}
          className="border-2 border-neutral-300 px-10 py-2 w-fit rounded-xl font-semibold text-lg"
        >
          Changer le mot de passe
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => (window.location.href = "/signup")}
          className="bg-secondary px-10 py-2 text-white w-fit rounded-xl font-semibold text-lg"
          type="submit"
        >
          Valider les mofiications
        </motion.button>
      </div>
    </form>
  );
};

export default Profile;
