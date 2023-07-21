import { Outlet } from "react-router-dom";
import { Header, NavBar, SideBar } from ".";

const SheardLyout = () => {
  return (
    <div className=" dark:bg-[#cfc5ef] bg-dark-one  min-h-screen sm:flex sm:flex-col md:justify-center md:items-center relative ">
      <NavBar />
      <div className="md:grid md:grid-cols-custom-md lg:grid-cols-custom-lg  md:grid-rows-custom-md grid-template-area md:dark:bg-dark-one  bg-[#cfc5ef]   font-nunito dark:text-white text-dark-one md:h-[92vh] md:shadow-2xl md:shadow-neutral-950 md:w-[94vw] rounded-xl ">
        <Header />
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default SheardLyout;
