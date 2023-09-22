import Image from "next/image";
import Logo from "../../../public/assets/img/logo-main.svg";
import { topNavList } from "@/app/utils/exportData";
import Link from "next/link";
import Button from "../shared/Button";
const TopNav = () => {
  return (
    <div className=" flex flex-row w-full  items-center  mx-auto lg:max-w-[950px] xl:max-w-[1140px]  2xl:max-w-[1280px]">
      <div className=" flex-1  flex flex-col">
        <Image src={Logo} alt="muxt" className=" w-[120px] md:w-[130px]" />
      </div>
      <nav className=" hidden lg:flex flex-row items-center">
        <ul className=" flex flex-row gap-x-[20px] flex-1 ">
          {topNavList.map((list, index) => (
            <Link key={index} href={list.url}>
              <li className=" text-black text-[14px] uppercase font-medium hover:text-primary ">
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex flex-row lg:ml-[50px] items-center gap-x-[20px]  ">
          <Button buttonClass=" font-medium w-[180px] text-primary border-[1px] border-primary !bg-transparent !text-primary">
            Download Muxt
          </Button>
          <Button buttonClass=" font-medium w-[180px] !bg-primary text-white">
            Get Ad Space
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
