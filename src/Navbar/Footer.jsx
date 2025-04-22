import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <div className="bg-[#222831] h-[20rem] flex items-center justify-center flex-col gap-y-12 w-full">
      <div className="flex items-center justify-center gap-8 w-full sm:flex-col flex-col md:flex-row">
        <div className=" text-[#EEEEEE] gap-1 flex text-1xl">
          <HomeOutlinedIcon />
          <span className="]">Home</span>
        </div>
        <div className="text-[#EEEEEE] gap-1 flex text-1xl">
          <PersonOutlineOutlinedIcon />
          <span className="">About me</span>
        </div>
        <div className="text-[#EEEEEE] gap-1 flex text-1xl">
          <CallOutlinedIcon />
          <span className="">Contact</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="rounded-full bg-gray-500/20">
          {" "}
          <CiFacebook className="w-8 h-[2.6rem] rounded-xl text-white" />
        </div>
        <div className="rounded-full bg-gray-500/20">
          <FaInstagram className="w-8 h-[2.6rem] text-white" />
        </div>
        <div className="rounded-full bg-gray-500/20">
          <CiTwitter className="w-8 h-[2.6rem] text-white" />
        </div>{" "}
        <div className="rounded-full bg-gray-500/20">
          <CiYoutube className="w-8 h-[2.6rem] text-white" />
        </div>
      </div>
      <div className="flex justify-center self-end w-96 h-[3rem] items-center pr-12 ">
        {" "}
        <span className="flex text-[#EEEEEEBF] ">
          Terms of Service - Privacy Policy
        </span>
      </div>
    </div>
  );
}

export default Footer;
