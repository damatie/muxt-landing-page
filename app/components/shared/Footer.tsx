import React from "react";
import Image from "next/image";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Logo from "../../../public/assets/img/logo-main.svg";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" flex flex-col w-full bg-white mt-[150px] px-[20px] lg:px-0">
      <div className=" flex flex-row lg:flex-row w-full justify-between  mx-auto lg:max-w-[950px] xl:max-w-[1140px]  2xl:max-w-[1280px] lg:gap-x-[30px]  h-[300px] lg:pt-[0px] ">
        <div className=" flex flex-col w-1/2 ">
          <p>
            <Image src={Logo} alt="muxt" />
          </p>
          <p className=" text-[#868686] mt-[20px]">
            {" "}
            ©Muxt 2023
            <br /> All rights reserved.
          </p>
        </div>
        <div className="w-1/2 flex flex-col text-[#F8F9FA]">
          <h2 className=" text-[24px] mb-[10px] text-black font-medium">
            Company
          </h2>
          <ul className="lg:space-y-[10px] text-[#868686] ">
            <li>About US</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="w-1/2 flex flex-col ">
          <h2 className=" text-[24px] mb-[10px] text-black font-medium">
            Products
          </h2>
          <ul className="lg:space-y-[10px] text-[#868686]">
            <li>MuxtAd</li>
            <li className=" flex flex-row items-center gap-x-[4px]">
              BeCreative{" "}
              <span className=" text-[12px] font-medium block text-secondary animate-bounce">
                {" "}
                Coming soon
              </span>
            </li>
          </ul>
        </div>
        <div className=" w-1/2 flex flex-col text-[#868686]">
          <h2 className=" text-[24px] mb-[10px] text-black font-medium">
            Socials
          </h2>
          <p>Find us on social media</p>
          <div className=" flex flex-row text-3xl space-x-3 py-3 text-black">
            <a href={`#`}>
              <FaSquareFacebook />
            </a>

            <a href={`#`}>
              <FaSquareXTwitter />
            </a>
            <a href={`#`}>
              <FaLinkedin />
            </a>
            <a href={`#`}>
              <FaSquareInstagram />
            </a>
          </div>

          <p className="  lg:w-[300px] leading-7 mt-3">
            <span className=" font-medium">Contact</span>
            <br></br> hello@muxt.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
