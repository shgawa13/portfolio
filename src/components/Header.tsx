import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/7oot.png";

const Header = () => {
  return (
    <div className="  hidden md:grid    rounded-lg border-none  md:col-span-2 lg:col-span-3 animate-slideright ">
      <div className=" flex  justify-between ">
        <div className=" flex items-center ml-4 ">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " Software Developer",
              2000,
              " Web Developer",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            cursor={false}
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "#e0dee1",
              textShadow: " 0px 2px 5px #000",
            }}
            repeat={1}
          />
        </div>
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
    </div>
  );
};

export default Header;
