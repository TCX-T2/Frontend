
const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
