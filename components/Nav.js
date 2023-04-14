import Logo from "../public/image/Logo.png";
import { Pivot as Hamburger } from "hamburger-react";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false)
  
// const handleClick = () => {
//   setOpen(false);
// };
  return (
    <div>
      <div className="bg-[#EBFFF5] w-full h-20 lg:flex lg:space-x-60 md:hidden hidden xl:space-x-80 sm:hidden fixed z-10">
        <div className="z-10 lg:ml-5 md:pl-8">
          <Image
            priority
            width={100}
            height={100}
            src={Logo}
            alt="logo"
            className="mt-4"
          />
        </div>
        <div className="md:hidden hidden lg:block">
          <ul className="font-OpenSans text-[20px] flex space-x-24 pt-5 text-black">
            <li className="hover:underline hover:bg-secondary hover:rounded-full hover:w-3 hover:bg-h-1  duration-200 ease-in-out ">
              Home
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Login</li>
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
        <div className="bg-[#EBFFF5] w-full h-96 fixed z-10">
          <ul className="font-OpenSans text-[20px] flex flex-col space-y-7 pt-16 text-black transition-colors ease-in-out duration-300 pl-7">
            <li className="hover:underline hover:bg-secondary hover:rounded-full hover:w-3 hover:bg-h-1  duration-200 ease-in-out ">
              Home
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
