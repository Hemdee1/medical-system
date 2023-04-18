import Logo from "../public/image/Logo.png";
import { Pivot as Hamburger } from "hamburger-react";
import Image from "next/image";
import { useState } from "react";
// import  "../Custom-styles/nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false)
  
// const handleClick = () => {
//   setOpen(false);
// };
  return (
    <div>
      <div className="bg-[#EBFFF5] w-full h-20 lg:flex lg:space-x-52 md:hidden hidden xl:space-x-80 sm:hidden fixed z-10">
        <div className="z-10 lg:ml-2 xl:ml-6 md:pl-8">
          <Image
            priority
            width={100}
            height={100}
            src={Logo}
            alt="logo"
            className="mt-4 lg:mt-7"
          />
        </div>
        <div className="md:hidden hidden lg:block">
          <ul className="font-OpenSans text-[20px] flex xl:space-x-28 lg:space-x-20 pt-5 text-black">
            <li className=" menu">Home</li>
            <li className="menu">About</li>
            <li className="menu">Services</li>
            <li className="menu">Contact</li>
            <li className="menu">Login</li>
          </ul>
        </div>
      </div>
      <div className="flex overflow-hidden justify-between bg-[#EBFFF5] w-full h-16 lg:hidden fixed z-20 pt-0 border-b-2 border-[#ceddd5]">
        <div className="z-10 md:pl-8 pl-5 sm:pl-5">
          <Image
            priority
            width={90}
            height={90}
            src={Logo}
            alt="logo"
            className="mt-4"
          />
        </div>
        <div className="pr-0 md:pr-5 lg:hidden cursor-pointer md:cursor-pointer ">
          <Hamburger
            direction="Pivot"
            size={25}
            color="black"
            className="mt-2"
            toggled={open}
            toggle={() => setOpen(!open)}
          />
        </div>
      </div>
      {open && (
        <div className="bg-[#EBFFF5] w-full h-screen fixed z-10 slide-in-left">
          <ul className="font-OpenSans text-[20px] flex flex-col space-y-16 pt-28 text-black  pl-20">
            <li className="cursor-pointer menu hover:text-primary">Home</li>
            <li className="cursor-pointer menu hover:text-primary">About</li>
            <li className="cursor-pointer menu hover:text-primary">Services</li>
            <li className="cursor-pointer menu hover:text-primary">Contact</li>
            <li className="cursor-pointer menu hover:text-primary">Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
