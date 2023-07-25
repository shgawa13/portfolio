import proImage from "../assets/programming.svg";
const Home = () => {
  console.log(import.meta.env.VITE_KEY);
  return (
    <div className="  pt-16 md:pt-0   md:col-span-2 md:animate-slowfade transform-gpu">
      Home
      <div className="  bg-dark-three w-1/2">
        <img
          className=" block w-80 h-auto object-cover"
          src={proImage}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default Home;
