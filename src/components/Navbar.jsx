
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-between mx-10">
      <div className="flex gap-6 items-center">
        <img
          onClick={() => (window.location.href = "/")}
          src="ico.svg"
          alt="logo_MEDHUB"
          className=" my-[1rem] cursor-pointer"
        />
        <h1 className="font-extrabold text-4xl text-secondary">MED FLOW</h1>
      </div>
      <div className="flex gap-16 text-lg">
        <button
          id="AccueilBtn"
          className="  hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => (window.location.href = "/")}
        >
          Acceuil
        </button>

        <button
          id="AboutBtn"
          className=" hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => scrollToSection("#about")}
        >
          A propos
        </button>
        <button
          id="ServicesBtn"
          className=" hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => scrollToSection("#services")}
        >
          Services
        </button>
        <button
          id="ContactBtn"
          className=" hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => scrollToSection("#contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
