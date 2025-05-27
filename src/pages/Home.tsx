import { TypeAnimation } from "react-type-animation";
import Cards from "../components/card/Cards";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col pt-5">
        <div className="">
          <h1 className="text-xl font-bold font-serif sm:text-3xl md:text-3xl lg:text-3xl text-center animate__animated animate__backInLeft">Welcome to Interview Adda</h1>
        </div>
        <div className="mt-6">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "We provide interview questions \nfor Javascript",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "We provide interview questions \nfor React.js",
              1000,
              "We provide interview questions \nfor Node.js",
              1000,
              "We provide interview questions \nfor HTML",
              1000,
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: "3em", display: "inline-block" }}
            // className="text-xl sm:text-2xl md:text-3xl lg:text-4xl inline-block"
            className="text-xl font-bold sm:text-3xl font-serif md:text-4xl lg:text-4xl inline-block whitespace-pre-line text-center"
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="animate__animated animate__bounceInUp">
        <Cards />
      </div>
    </>
  );
};

export default Home;
