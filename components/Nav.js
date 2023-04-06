import Logo from "../public/image/Logo.png";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="bg-[#EBFFF5] w-full h-20 flex space-x-80">
      <div className="z-10 pl-16">
        <Image
          priority
          width={100}
          height={100}
          src={Logo}
          alt="logo"
          className="mt-4 z-10"
        />
      </div>
      <div>
        <ul className="font-OpenSans text-[20px] flex space-x-24 pt-5 text-black">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
