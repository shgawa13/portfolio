import { useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menue, setMenue] = useState(true);
  const openMenue = () => setMenue((prev) => !prev);

  return (
    <nav className=" flex md:hidden z-10 shadow-2xl dark:bg-dark-three bg-gray dark:text-white text-slate-600 fixed top-0 left-0 w-full px-4 py-3  ">
      {menue ? (
        <button className=" " onClick={openMenue}>
          <TbMenu2 className="   flex md:hidden transition-colors cursor-pointer hover:text-rose-500 text-xl   focus:outline-none focus:ring focus:ring-violet-300" />
        </button>
      ) : (
        <div className=" transition duration-150 ease-out md:ease-in flex md:hidden  w-full rounded-b-sm">
          <button
            className="  h-9 w-9 flex justify-center itmes-center my-auto text-center"
            onClick={openMenue}
          >
            <TbX className=" transition-colors cursor-pointer hover:text-rose-500  text-2xl font-bold my-auto " />
          </button>
          <ul className=" transition-all delay-150 flex flex-col m-auto p-5 space-y-6 font-nunito font-bold">
            <li>
              <NavLink
                className="transition-all delay-150 hover:text-rose-500  p-2 "
                onClick={openMenue}
                to="."
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" hover:text-rose-500 transition-all duration-300 p-2 "
                onClick={openMenue}
                to="about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
