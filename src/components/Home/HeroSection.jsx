import React from "react";
import { ArrowRight } from "lucide-react";
import myImage from "../../Assets/undraw_vibe-coding_mjme.png";


const HeroSection = ({authUI, setAuthUI}) => { 
  
  
  return(
  <section className=" HeroSection  py-10 md:py-16 bg-grid ">
    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
      {/* Left Text Section */}
      <div className="hero-bg w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight lg:leading-tight">
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">The Smartest Way {' '}</span>
          <span className="bg-gradient-to-r from-indigo-500 to-sky-500 text-transparent bg-clip-text">
            To Understand The Web
          </span>
        </h1>
        <p className="mt-6 sm:mt-8 text-gray-600 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0">
          Save hours by instantly extracting clean content from any website, get smart summaries, and interact with our AI assistant to find answers quickly.
        </p>
        <div className="mt-8 sm:mt-10 flex gap-4 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer" 
          onClick={() =>setAuthUI(!authUI)}>
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors hover:cursor-pointer">
            Try Demo
          </button>
        </div>
      </div>

      {/* Right Illustration Section */}
      <div className="hidden w-full lg:w-1/2 lg:flex justify-center">
        <img
          className="w-full max-w-sm sm:max-w-md xl:max-w-xl h-auto rounded-lg shadow-xl p-2 bg-white"
          src={myImage}
          alt="App illustration showing content extraction"
        />
      </div>

    </div>
  </section>


);
}

//__Lexend_866216
export default HeroSection;
