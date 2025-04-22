import React from "react";
import musicIcon from "../assets/music.png";
import bulbIcon from "../assets/bulb.png";
import Aboutimg from "../assets/imgAbout.png";

function Aboutme() {
  return (
    <div className="bg-[#222831] px-5 py-10 border-b-2 border-[#EEEEEE1A]">
      {/* Top icon */}
      <div className="px-2 mb-6">
        <img src={musicIcon} alt="Music Icon" className="w-10 sm:w-12 mt-2" />
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 px-2 md:px-6">
        {/* Text section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <h1 className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl flex items-center mb-4">
            About <span className="text-[#00ADB5] px-3">me</span>
            <img src={bulbIcon} alt="Bulb Icon" className="w-8 sm:w-10 ml-2" />
          </h1>

          <p className="text-white text-base sm:text-lg font-normal leading-relaxed w-full sm:w-5/6 lg:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            suscipit, doloribus vero optio vitae a quae debitis rerum facere
            reprehenderit perspiciatis eius nihil ut sint ipsa. Dolorum rem
            assumenda aspernatur?
          </p>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Aboutimg}
            alt="About Page"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
