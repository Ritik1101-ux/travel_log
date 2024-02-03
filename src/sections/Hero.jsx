import { hero, workicon, playicon } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container w-full max-sm:w-4/5 min-h-screen flex justify-center items-center flex-col-reverse md:flex-row "
    >
      <div className="flex flex-col justify-center">
        <button className="flex shadow-md h-16 text-pink text-lg font-inter sm:w-3/5 rounded-full font-semibold  border justify-center items-center">
          Explore The World!
          <img src={workicon} alt="WorkIcon" className="pl-2" />
        </button>

        <h1 className="text-4xl max-sm:text-[50px] font-semibold mt-3  ">
          Travel <span className="text-pink font-bold ">top destinations</span> <br />
          of the world!
        </h1>
        <p className="text-slate-gray mt-3 ">
          We always make our customer happy by providing <br/> as many choices as
          possible
        </p>

        <div className="flex flex-col md:flex-row mt-5 ">
          <button className="shadow-md py-4 bg-purple px-8 font-semibold font-inter text-white rounded-full text-base">
            Get Started
          </button>
          <button className="flex shadow-md border px-16 items-center max-md:mt-3 md:ml-3 justify-center py-4  rounded-full  text-base text-purple font-semibold font-inter hover:scale-[1.05]">
            {" "}
            <img src={playicon} alt="Play Icon" className="px-2 " /> Watch Demo
          </button>
        </div>
      </div>
      <div className="pt-20 ">
        <img src={hero} alt="Hero image" style={{minWidth:'300px',width:'700px'}} />
      </div>
    </section>
  );
};

export default Hero;
