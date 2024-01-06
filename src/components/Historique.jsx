import React from "react";
import NavbarUser from "../components/NavbarUser";
import axios from "../config/axiosConfig.js";

const Historique = () => {
  const token = localStorage.getItem("token");
  const [historique, setHistorique] = React.useState([]);

  const loadHistorique = () => {
    axios
      .get("/history/all", { headers: { "x-access-token": token } })
      .then((response) => {
        console.log("Historique:", response.data);
        setHistorique(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  React.useEffect(() => {
    loadHistorique();
  }, []);

  return (
    <div className=" flex flex-col w-4/5">
      <NavbarUser />
      <div className="flex flex-col gap-y-5">
        <h3 className="font-bold text-4xl m-10 mb-17">Historique</h3>
        <ul className="flex flex-col self-start gap-y-4 overflow-y-scroll h-96 scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin w-2/5">
          {historique.map((element) => (
            <div className="flex gap-y-1" key={element._id}>
              <li className="font-semibold text-lg ml-10">
                {element.actionType}
              </li>
              <li className="font-semibold text-lg ml-10">
                {element.RessourceName}
              </li>
              <li className="font-semibold text-lg ml-10">
                {element.timestamp}
              </li>
              <hr className="bg-gray-300 mb-1" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Historique;
