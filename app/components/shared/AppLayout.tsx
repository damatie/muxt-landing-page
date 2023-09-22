import React from "react";
import Footer from "./Footer";
import ContentCard from "./ContentCard";
import Image from "next/image";
import Button from "./Button";
import Playstore from "../../../public/assets/img/google-play.svg";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" w-full">
      <div>{children}</div>
      <ContentCard className=" flex !flex-row !h-auto bg-primary mt-[120px] justify-between items-center w-[900px]">
        <div className=" text-[34px] text-[#F8F9FA] font-medium w-[550px] leading-[40px] ">
          <p>
            What are you waiting for? Download the Muxt App & get started now!
          </p>
        </div>
        <Button buttonClass=" font-medium  w-[200px] lg:h-[60px] !bg-[#F8F9FA] rounded-full text-primary lg:text-[16px] gap-x-[20px]">
          <Image src={Playstore} alt="muxt" className=" w-[25px] " />
          <div className=" flex flex-col">
            <p className=" !font-light mb-[-5px] p-0 text-left text-[13px]">
              Available on
            </p>
            <p className=" text-left">Play Store</p>
          </div>
        </Button>
      </ContentCard>
      <Footer />
    </main>
  );
};

export default AppLayout;
