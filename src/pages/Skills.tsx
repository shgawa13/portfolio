import git from "../assets/git.svg";
import linux from "../assets/linux.svg";
const Skills = () => {
  return (
    <div className=" flex mt-16   md:p-5 md:col-span-2 lg:col-span-3  md:row-span-2 ">
      <div>
        <img
          className="w-9 dark:fill-gray fill-slate-800  dark:hover:drop-shadow-icon hover:scale-110 ease-in-out duration-300 transform-gpu"
          src={git}
          alt=""
          srcSet=""
        />
        <img src={linux} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Skills;
