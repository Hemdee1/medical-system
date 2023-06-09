import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../context/context";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const { user } = useAppContext();
  const [open, setOpen] = useState(false);

  return (
    <header className="z-50 bg-[#EBFFF5] fixed top-0 left-0 w-full">
      <div className="relative flex items-center justify-between h-20 max-w-full px-5 mx-auto w-fullscreen sm:px-20">
        <Link href="/" className="z-10">
          <Image
            priority
            width={100}
            height={100}
            src="/image/Logo.png"
            alt="logo"
          />
        </Link>
        <div className="hidden md:block font-OpenSans">
          <ul className="flex gap-10 text-xl text-black lg:gap-20">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="#" className="hover:text-primary">
              Services
            </Link>
            <Link href="/hospital" className="hover:text-primary">
              Hospitals
            </Link>
            {user ? (
              <Link href="/profile/dashboard" className="hover:text-primary">
                Dashboard
              </Link>
            ) : (
              <Link href="/login" className="hover:text-primary">
                Login
              </Link>
            )}
          </ul>
        </div>

        <button className="md:hidden">
          <Hamburger toggle={setOpen} toggled={open} size={25} />
        </button>
      </div>

      <div
        className={`bg-[#EBFFF5] w-[250px] shadow shadow-gray-400 h-screen fixed z-10 font-OpenSans transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="font-OpenSans text-[20px] flex flex-col space-y-16 pt-28 text-black  pl-20">
          <Link href="#" className="hover:text-primary">
            About
          </Link>
          <Link href="#" className="hover:text-primary">
            Services
          </Link>
          <Link href="/hospital" className="hover:text-primary">
            Hospitals
          </Link>
          {user ? (
            <Link href="/dashboard" className="hover:text-primary">
              Dashboard
            </Link>
          ) : (
            <Link href="/login" className="hover:text-primary">
              Login
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
