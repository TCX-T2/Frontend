// ThirdStep.jsx
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axiosInstance from "../../../../config/axiosConfig.js";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const ThirdStep = ({ formData, onBack }) => {
  const token = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: {
      visitdate: "",
      rendezvous: "",
      bilans: null,
      photos: null,
    },
    validationSchema: Yup.object({
      visitdate: Yup.string().required("Date de Visite est obligatoire"),
      rendezvous: Yup.string().required("Prochain Rendez-vous est obligatoire"),
      bilans: Yup.mixed().test(
        "fileSize",
        "Bilan should be less than 2MB",
        (value) => value === null || value.size <= 2000000
      ),
      photos: Yup.mixed()
        .test("fileType", "Only photos are allowed", (value) => {
          return value === null || value.type.startsWith("image/");
        })
        .test("fileSize", "Images should be less than 2MB", (value) => {
          return value === null || value.size <= 2000000;
        }),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const combinedData = { ...formData, ...values };
        const sendData = new FormData();
        sendData.append("Nom_p", combinedData.Nom);
        sendData.append("Prenom_p", combinedData.Prenom);
        sendData.append("Date_naissance", combinedData.birthdate);
        sendData.append("Phone", combinedData.numerotel);
        sendData.append("email", combinedData.Adressemail);
        sendData.append("Sexe", combinedData.sexe);
        sendData.append("SituationFamiliale", combinedData.situationfamiliale);
        sendData.append("Antecedants", combinedData.Antecedants);
        sendData.append("MotifConsultation", combinedData.motifconsultaion);
        sendData.append("Medicaments", combinedData.Medicaments);
        sendData.append("CompteRendu", combinedData.compterendu);
        sendData.append("DateVisite", combinedData.visitdate);
        sendData.append("DateProchaineRendezVous", combinedData.rendezvous);
        sendData.append("bilans", combinedData.bilans);
        sendData.append("images", combinedData.photos);

        const response = await axiosInstance.post("/patients/add", sendData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": token,
          },
        });

        toast.success(response.data.message);
        // wait for 2 seconds before redirecting to the dashboard
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while submitting the form.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 p-10 px-20 w-4/5 m-auto relative"
      encType="multipart/form-data"
    >
      <ToastContainer />
      <img
        src="icons/step3.svg"
        alt="step1 form image"
        className="w-2/5 right-[20rem] absolute top-[-2rem]"
      />
      {/* Render additional form fields for the third step */}
      <div className="flex gap-10 items-center justify-start">
        {/* Date of Visit */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="visitdate"
            className={`${
              formik.touched.visitdate && formik.errors.visitdate
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.visitdate && formik.errors.visitdate
              ? formik.errors.visitdate
              : "Date de Visite"}
          </label>
          <input
            type="date"
            name="visitdate"
            value={formik.values.visitdate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        {/* Next Appointment */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="rendezvous"
            className={`${
              formik.touched.rendezvous && formik.errors.rendezvous
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.rendezvous && formik.errors.rendezvous
              ? formik.errors.rendezvous
              : "Prochain Rendez-vous"}
          </label>
          <input
            type="date"
            name="rendezvous"
            value={formik.values.rendezvous}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      {/* Bilan File Upload */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="bilans"
          className={`${
            formik.touched.bilans && formik.errors.bilans ? "text-red-500" : ""
          }`}
        >
          {formik.touched.bilans && formik.errors.bilans
            ? formik.errors.bilans
            : "Bilan"}
        </label>
        <input
          type="file"
          name="bilans"
          onChange={(e) => formik.setFieldValue("bilans", e.target.files[0])} // Handle file change
          onBlur={formik.handleBlur}
          className="border-[1.5px] border-neutral-300 w-full rounded-md p-3 h-14 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      {/* Images File Upload */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="photos"
          className={`${
            formik.touched.photos && formik.errors.photos ? "text-red-500" : ""
          }`}
        >
          {formik.touched.photos && formik.errors.photos
            ? formik.errors.photos
            : "Images"}
        </label>
        <input
          type="file"
          name="photos"
          accept="image/*" // Allow only photos
          onChange={(e) => formik.setFieldValue("photos", e.target.files[0])} // Handle file change
          onBlur={formik.handleBlur}
          className="border-[1.5px] border-neutral-300 w-full rounded-md p-3 h-14 outline-none focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      {/* Back button */}
      <div className="flex gap-10 items-center justify-between">
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="border-2 border-neutral-300 px-10 py-2 w-fit rounded-xl font-semibold text-lg"
          onClick={() => onBack()}
        >
          Previous
        </motion.button>
        {/* Submit button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-secondary px-10 py-2 text-white w-fit rounded-xl font-semibold text-lg"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </motion.button>
      </div>
    </form>
  );
};

export default ThirdStep;
