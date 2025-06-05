import React from "react";
import Navbar from "../Navbar/Navbar";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import homeimg from "../assets/imghome.png";
import SouthIcon from "@mui/icons-material/South";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };
  return (
    <>
      <div className="bg-[#222831] overscroll-none border-b-2 border-[#EEEEEE1A]">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 md:px-10 lg:px-20">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="w-full lg:w-2/3 md:w-2/3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-10">
              CREATIVE UI <span className="text-[#00adb5]">DESIGNER</span>
            </h1>

            <div className="py-6 px-4 sm:px-0 mt-6 flex flex-col sm:flex-row gap-4 sm:gap-x-8 w-full :w-auto justify-center sm:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#00adb5] rounded-3xl w-full sm:w-32 h-12 text-white font-bold shadow-lg shadow-zinc-500/50 "
              >
                Hire me
              </button>
              {/* <button className="bg-[#393E46BF] rounded-3xl w-full sm:w-44 h-12 text-white font-bold flex items-center justify-center gap-x-2 shadow-lg shadow-gray-500/50 ">
                Download Cv
                <SaveAltIcon className="w-4 h-4" />
              </button> */}
              <a
                href="/resume.pdf"
                download
                className="bg-[#393E46BF] rounded-3xl w-full sm:w-44 h-12 text-white font-bold flex items-center justify-center gap-x-2 shadow-lg shadow-gray-500/50"
              >
                Download CV
                <SaveAltIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="flex justify-center items-center mt-10 sm:mt-16 md:mt-20 py-10 sm:py-14 md:py-20 w-full">
              <button
                className="bg-[#393E46BF] w-16 h-16 sm:w-20 sm:h-20 text-white flex items-center justify-center"
                onClick={() => scrollToSection("about")}
              >
                <SouthIcon />
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0  ">
            <img
              src={homeimg}
              alt="Home Page"
              className="w-60 sm:w-72 md:w-96 lg:w-[450px] xl:w-[450px] shadow-lg shadow-cyan-500/50 rounded-[5vw]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
