import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "../config/axiosConfig.js";

const Signup = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    Nom: Yup.string().required("Nom is required"),
    Prenom: Yup.string().required("Prenom is required"),
    mail: Yup.string().email("Invalid email").required("Email is required"),
    PhoneNumber: Yup.string().required("Phone number is required"),
    Username: Yup.string().required("Address is required"),
    Speciality: Yup.string().required("Field of study is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      Nom: "",
      email: "",
      PhoneNumber: "",
      Username: "",
      Speciality: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("/signup", values)
        .then((response) => {
          console.log(response.data); // Handle successful response here
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("Nom", response.data.Nom);
          localStorage.setItem("Speciality", response.data.Speciality);
          navigate("/dashboard", { replace: true });
        })
        .catch((error) => {
          console.log(error.response.data);
          console.error(error); // Handle error here
        });
    },
  });

  return (
    <div className=" h-screen w-screen flex ">
      <div className="w-full bg-secondary flex justify-center items-center rounded-tr-3xl">
        <img
          src="images/signin.svg"
          alt="img_illustartion_desk_pc"
          className=" w-2/3 object-cover object-center"
        />
      </div>
      <div className=" flex flex-col items-center justify-center w-11/12">
        <div className=" rounded-xl w-[32rem]">
          <h2 className="text-4xl font-bold mb-5 text-center">
            Bienvenu à MedFlow
          </h2>
          <h2 className="text-xl font-semibold mb-5 text-center">
            Creer un compte
          </h2>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            <div className="flex gap-10">
              <div>
                <label htmlFor="Nom">Nom</label>
                <input
                  type="text"
                  className="mt-2 border border-gray-400 rounded-md p-5 h-9 w-full"
                  name="Nom"
                  id="Nom"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Nom}
                />
              </div>
              <div>
                <label htmlFor="Prenom">Prenom</label>
                <input
                  type="text"
                  className="mt-2 border border-gray-400 rounded-md p-5 h-9 w-full"
                  name="Prenom"
                  id="Prenom"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Prenom}
                />
              </div>
            </div>
            <div>
              <label htmlFor="mail">Addresse mail</label>
              <div className=" relative ">
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mail}
                  className="mt-2 border border-gray-400 rounded-md p-5 h-9 w-full"
                />
              </div>
              {formik.touched.mail && formik.errors.mail && (
                <div className="text-red-500">{formik.errors.mail}</div>
              )}
            </div>
            <div className="flex gap-10">
              <div>
                <label htmlFor="Nom">Numéro de téléphone</label>
                <input
                  type="text"
                  className="mt-2 border border-gray-400 rounded-md p-5 h-9 w-full"
                  name="PhoneNumber"
                  id="PhoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.PhoneNumber}
                />
              </div>
              <div>
                <label htmlFor="s">Spécialité</label>
                <input
                  type="text"
                  className="mt-2 border border-gray-400 rounded-md p-5 h-9 w-100 "
                  name="Speciality"
                  id="Speciality"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Speciality}
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div>
                <label htmlFor="Username">Nom utilisateur </label>

                <input
                  type="Username"
                  id="Username"
                  name="Username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Username}
                  className="mt-2 border border-gray-400 rounded-md p-5 h-9 w-full"
                />
                {formik.touched.Username && formik.errors.Username && (
                  <div className="text-red-500">{formik.errors.Username}</div>
                )}
              </div>
              <div>
                <label htmlFor="password">Mot de passe </label>
                <div className=" relative">
                  <img
                    src="icons/passwordEye.svg"
                    alt="icon_eye"
                    className=" rounded object-center absolute p-1 right-2 top-3 h-8 w-8"
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="mt-2 border border-gray-400 rounded-md p-5 h-9"
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-secondary text-white font-bold mt-5 p-3 rounded-md hover:bg-secondary/80 transition duration-300 ease-in-out"
            >
              S'inscrire
            </button>
          </form>
          <div>
            <div className="flex justify-center mt-3">
              <p className="text-xm">
                Vous avez déja un compt
                <span
                  onClick={() => {
                    window.location.href = "/signin";
                  }}
                  className=" ml-3 font-semibold underline text-secondary hover:text-black transition duration-300 ease-in-out w-full"
                >
                  Connecter-vous
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
