import Logo from "../public/svg/Logo.svg";
import twitter from "../public/svg/twitter.svg";
import instagram from "../public/svg/instagram.svg";
import facebook from "../public/svg/facebook.svg";
import location from "../public/svg/location.svg";
import phone from "../public/svg/phone.svg";
import calendar from "../public/svg/calendar.svg";
import mail from "../public/svg/mail.svg";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#EBFFF5] w-full lg:h-28 md:h-28 h-52 lg:mt-32 md:mt-32 mt-20 ">
        <div className="lg:flex lg:flex-row lg:justify-evenly md:flex-row md:justify-evenly ml-5 pt-5">
          <button className="flex border-2 border-primary rounded-2xl lg:px-5 md:px-5 px-8 lg:mt-10  md:mt-10 mt-5 py-0 lg:gap-3 md:gap-3 gap-3">
            <Image
              priority
              width={25}
              height={20}
              src={phone}
              alt="logo"
              className="lg:w-5 lg:h-5 mt-3 md:w-4 md:h-4 w-3 h-3 sm:h-3 sm:w-3"
            />
            <p className="pt-1 text-black lg:text-sm md:text-xs text-xs sm:text-xs font-OpenSans text-start">
              Any questions?Call us now
              <br /> <span className="font-bold">9988776655</span>
            </p>
          </button>
          <button className="flex border-2 border-primary rounded-2xl px-6 py-0 gap-3 lg:mt-10  md:mt-10 mt-5 ">
            <Image
              priority
              width={30}
              height={30}
              src={calendar}
              alt="logo"
              className="lg:w-5 lg:h-5 mt-3 md:w-4 md:h-4 w-3 h-3 sm:h-3 sm:w-3"
            />
            <p className="text-black lg:text-sm font-OpenSans pt-1 text-start md:text-xs text-xs sm:text-xs">
              We are open from
              <br />{" "}
              <span className="font-bold">Mon - Fri, 10:00am - 3:00pm</span>
            </p>
          </button>
          <button className="flex border-2 border-primary rounded-2xl px-8 lg:mt-10  md:mt-10 mt-5 py-0 gap-3">
            <Image
              priority
              width={30}
              height={30}
              src={mail}
              alt="logo"
              className="lg:w-5 lg:h-5 mt-3 md:w-4 md:h-4 w-3 h-3 sm:h-3 sm:w-3"
            />
            <p className="text-black lg:text-sm font-OpenSans md:text-xs text-xs sm:text-xs pt-1 text-start">
              {" "}
              Drop us an email
              <br /> <span className="font-bold">corneaclinic@gmail.com</span>
            </p>
          </button>
        </div>
      </div>
      <div className="w-full h-80 bg-primary ">
        <div className="lg:pl-20 pt-10 lg:flex lg:justify-between flex justify-evenly">
          <div>
            <div>
              <Image
                priority
                width={150}
                height={150}
                src={Logo}
                alt="logo"
                className="mt-2 z-10"
              />
            </div>
            <div className="flex gap-2 pt-3">
              <Image
                priority
                width={20}
                height={20}
                src={location}
                alt="logo"
                className="mt-4 z-10"
              />
              <p className="text-sm text-white font-OpenSans mt-3">
                3B- sector41, Gandhi chowk
                <br /> Ahmedabad, Gujarat
              </p>
            </div>
            <div className="flex gap-10 pt-4">
              <Image
                priority
                width={30}
                height={30}
                src={twitter}
                alt="logo"
                className="mt-4 z-10"
              />
              <Image
                priority
                width={30}
                height={30}
                src={instagram}
                alt="logo"
                className="mt-4 z-10"
              />
              <Image
                priority
                width={30}
                height={30}
                src={facebook}
                alt="logo"
                className="mt-4 z-10"
              />
            </div>
          </div>
          <div className="text-white lg:pr-20 space-y-5 font-OpenSans">
            <h2 className="font-bold uppercase">Quick Links</h2>
            <p>About Us</p>
            <p>Services</p>
            <p>Contact Us</p>
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
