import React from "react";
import TopNav from "../components/nav/TopNav";
import AppLayout from "../components/shared/AppLayout";
import HeroBanner from "../components/home/HeroBanner";
import { muxtAdsPointers, muxtPointers } from "../utils/exportData";
import Image from "next/image";
import Photo from "../../public/assets/img/mobile-2.png";
import Dashboard from "../../public/assets/img/bg-main.png";
import ContentCard from "../components/shared/ContentCard";
import Button from "../components/shared/Button";

const HomeScreen = () => {
  return (
    <AppLayout>
      <div className=" w-full flex bg-gray-100 flex-col h-[570px] lg:h-[530px] xl:h-[650px] 2xl:h-[700px] pt-[20px] px-[20px] lg:px-0">
        <TopNav />
        <HeroBanner />
      </div>
      <main className=" mt-[70px] lg:mt-[120px] flex flex-col w-full px-[20px] lg:px-0">
        <div className=" flex flex-col lg:flex-row w-full justify-center  mx-auto lg:max-w-[950px] xl:max-w-[1140px]  2xl:max-w-[1280px] gap-y-[50px] lg:gap-x-[30px] items-center  h-[1200px] lg:h-auto">
          {muxtPointers.map((list, index) => (
            <ContentCard
              key={index}
              className={`overflow-hidden relative flex !pb-0 flex-col h-auto ${list.bgColor} w-full rounded-[20px]  justify-center `}
            >
              <div
                className={`mb-[24px] ${list.textColor} px-[30px] pt-[40px] lg:p-0 `}
              >
                <h2
                  className={`text-[36px] font-medium leading-[46px] lg:max-w-[260px]`}
                >
                  {list.title}
                </h2>
                <p className="lg:max-w-[260px] mt-[10px]"> {list.content}</p>
              </div>
              <div
                className={`${list.imgCard} items-center  flex flex-col  overflow-hidden  lg:h-[400px]  rounded-[20px] animate-fade-left`}
              >
                <Image
                  src={list.img}
                  alt="muxt"
                  className={` ${list.imgSize}`}
                />
              </div>
            </ContentCard>
          ))}
        </div>
        <ContentCard className=" flex-col-reverse  lg:!flex-row !items-center mx-auto  bg-secondary ] mt-[50px] lg:mt-[120px]  h-auto  lg:h-[500px]">
          <div
            className={`mb-[24px]  flex-1 lg:mt-[20px] px-[30px] pt-[30px] lg:p-0 `}
          >
            <h2
              className={`text-[30px] lg:text-[40px] text-[#F8F9FA] font-medium leading-[46px] lg:max-w-[450px]`}
            >
              Your Ultimate Ad Campaign Companion
            </h2>
            <p className="lg:max-w-[450px] mt-[10px] text-[20px] text-[#F8F9FA]">
              In the fast-paced and ever-evolving world of digital advertising,
              success often hinges on having the right tools at your disposal.
            </p>
            <Button buttonClass=" font-medium w-[180px] !bg-[#F8F9FA] text-black h-[58px] mt-[30px] lg:mt-[48px]">
              About Muxt Ads
            </Button>
          </div>
          <div className=" lg:absolute lg:right-[-] xl:right-[-450px] top-[90px] bottom-0 flex flex-col  overflow-hidden rounded-tl-[16px] animate-fade-left">
            <Image src={Dashboard} alt="muxt" className="w-[1000px] " />
          </div>
        </ContentCard>
        <div className=" flex flex-col lg:flex-row w-full justify-center  mx-auto lg:max-w-[950px] xl:max-w-[1140px]  2xl:max-w-[1280px] lg:gap-x-[30px] items-center  h-auto lg:mt-[120px] mt-[50px]  ">
          {muxtAdsPointers.map((list, index) => (
            <ContentCard
              key={index}
              className={`overflow-hidden relative flex flex-col  justify-between !pb-0 h-[700px] ${list.bgColor} w-full rounded-[20px]  justify-center `}
            >
              <div className={`mb-[24px] ${list.textColor} `}>
                <h2
                  className={`text-[36px] font-medium leading-[46px]  lg:max-w-[260px] `}
                >
                  {list.title}
                </h2>
                <p className="lg:max-w-[260px] mt-[10px]"> {list.content}</p>
              </div>
              <div className="  flex flex-col h-auto overflow-hidden   rounded-[20px] animate-fade-lefts  items-end">
                <Image
                  src={list.img}
                  alt="muxt"
                  className={`${list?.imgSize}`}
                />
              </div>
            </ContentCard>
          ))}
        </div>
      </main>
    </AppLayout>
  );
};

export default HomeScreen;
