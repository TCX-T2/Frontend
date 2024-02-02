import React from "react";
import { motion } from "framer-motion";
import {useFormik} from "formik";
import axiosInstance from "../config/axiosConfig.js";

const Profile = () => {

  

  const formik = useFormik({
    initialValues:{
      Nom: "",
      Prenom: "",
      Adressemail: "",
      numerotel: "",
      Specialite: "",
      utilisateur: ""
    }
  })

  return (
    <form className="flex flex-col gap-6 p-10 px-20 w-4/5 m-auto">
      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-2">
          <label htmlFor="Nom">Nom</label>
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            value={formik.values.Nom}
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
