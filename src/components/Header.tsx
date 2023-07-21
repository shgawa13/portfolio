import avatar from "../assets/7oot.png";
const Header = () => {
  return (
    <div className="  hidden md:grid justify-end   rounded-lg border-none  md:col-span-2 lg:col-span-3 animate-slideright ">
      <div className=" flex flex-wrap space-x-4 items-center dark:bg-gradient-to-r from-[#3b3363] to-[#413976] px-2  py-1 m-2 rounded-lg ">
        <div>
          <h1 className=" font-bold text-lg dark:text-slate-300 ">SHGAWA</h1>
          <h2 className=" font-bold text-base text-center dark:text-slate-400 ">
            Web Dev
          </h2>
        </div>
        <img
          src={avatar}
          className=" h-16 dark:shadow-sm dark:shadow-slate-950 rounded-xl"
          alt="avatar"
          srcSet=""
        />
      </div>
    </div>
  );
};

export default Header;
