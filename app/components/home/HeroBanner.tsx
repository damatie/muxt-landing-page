import React from "react";
import Button from "../shared/Button";
import Image from "next/image";
import Photo from "../../../public/assets/img/new-main.png";
import Playstore from "../../../public/assets/img/google-play.svg";

export const HeroBanner = () => {
  return (
    <div className="flex  flex-col-reverse lg:flex-row w-full mx-auto lg:max-w-[950px] xl:max-w-[1140px]  2xl:max-w-[1280px] lg:items-center mt-[50px] lg:mt-[50px] xl:mt-[116px] justify-between ">
      <div className=" flex flex-col 2xl:mt-[0px] animate-fade-up flex-1 lg:min-w-[470px]  ">
        <h1 className=" text-[30px] lg:text-[50px] mt-[20px] 2xl:text-[60px] font-medium  xl:max-w-[500px] 2xl:max-w-[600px] leading-[33px] lg:leading-[55px] 2xl:leading-[60px] text-black ">
          Social Ads space connect with Brands
        </h1>
        <p className="  lg:max-w-[430px] xl:max-w-[440px] 2xl:max-w-[500px] mt-[10px] text-[#6D7A98]  mb-[20px] lg:mb-[40px] text-[16px]  lg:text-[20px] ">
          Connect and engage with over 100K deals and offers from your choice
          brands while you earn.
        </p>

        <Button buttonClass=" font-medium w-[160px] md:w-[200px] h-[55px] lg:h-[60px] !bg-primary rounded-full text-white lg:text-[16px] gap-x-[10px] md:gap-x-[20px]">
          <Image
            src={Playstore}
            alt="muxt"
            className="w-[20px]  lg:w-[25px] "
          />
          <div className=" flex flex-col">
            <p className=" !font-light mb-[-5px] p-0 text-left text-[13px]">
              Available on
            </p>
            <p className=" text-left">Play Store</p>
          </div>
        </Button>
      </div>
      <div className=" flex flex-row items-start object-contain overflow-hidden animate-fade-left lg:w-[600px] xl:w-[670px] 2xl:w-[700px] ">
        <Image src={Photo} alt="muxt" />
      </div>
    </div>
  );
};
export default HeroBanner;
