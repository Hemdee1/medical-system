import Logo from "../public/svg/Logo.svg";
import twitter from "../public/svg/twitter.svg";
import instagram from "../public/svg/instagram.svg";
import facebook from "../public/svg/facebook.svg";
import location from "../public/svg/location.svg";
import phone from "../public/svg/phone.svg";
import calendar from "../public/svg/calendar.svg";
import mail from "../public/svg/mail.svg";
import Line from "../public/image/Line.png";
import Line3 from "../public/image/Line3.png";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#EBFFF5] w-full lg:h-28 xl:h-28 sm:h-24 md:h-28 h-52 lg:mt-32 md:mt-32 mt-20 ">
        <div className="lg:flex sm:flex-row sm:justify-evenly lg:flex-row lg:justify-around md:flex-row md:justify-evenly ml-5 pt-5  sm:ml-0 lg:ml-0 md:ml-0 flex items-center flex-col">
          <button className="flex border-2 border-primary rounded-2xl lg:px-5 md:px-5 px-8 lg:mt-3  md:mt-3 mt-5 py-0 lg:gap-3 md:gap-3 gap-3">
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
          <button className="flex border-2 border-primary rounded-2xl px-6 py-0 gap-3 lg:mt-3 md:mt-3 mt-5 ">
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
          <button className="flex border-2 border-primary rounded-2xl px-8 lg:mt-3 md:mt-3 mt-5 py-0 gap-3">
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
      <div className="w-full h-96 bg-primary ">
        <div className="lg:pl-16 pt-10 lg:flex lg:justify-between flex justify-between md:flex md:justify-between md:pl-12 pl-5 sm:pl-8 sm:justify-between">
          <div>
            <div>
              <Image
                priority
                width={150}
                height={150}
                src={Logo}
                alt="logo"
                className="mt-2 lg:w-32 lg:h-16 md:w-24 md:h-10 sm:w-24 sm:h-10 w-20 h-10"
              />
            </div>
            <div className="flex gap-2 pt-3">
              <Image
                priority
                width={20}
                height={20}
                src={location}
                alt="map"
                className="mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8 w-5 h-5"
              />
              <p className="lg:text-sm md:text-sm sm:text-sm text-xs text-white font-OpenSans mt-3">
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
                alt="twitter"
                className="mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8 w-5 h-5"
              />
              <Image
                priority
                width={30}
                height={30}
                src={instagram}
                alt="instagram"
                className="mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8 w-5 h-5"
              />
              <Image
                priority
                width={30}
                height={30}
                src={facebook}
                alt="facebook"
                className="mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8 w-5 h-5"
              />
            </div>
          </div>
          <div className="text-white lg:pr-16 md:pr-12 pr-5 sm:pr-8 space-y-5 font-OpenSans">
            <h2 className="font-bold uppercase lg:text-base md:text-sm text-xs sm:text-sm">
              Quick Links
            </h2>
            <p className="md:text-sm text-xs lg:text-sm sm:text-sm">About Us</p>
            <p className="md:text-sm text-xs lg:text-sm sm:text-sm">Services</p>
            <p className="md:text-sm text-xs lg:text-sm sm:text-sm">
              Contact Us
            </p>
            <p className="md:text-sm text-xs lg:text-sm sm:text-sm">Login</p>
          </div>
        </div>
        <div className=" mt-24 flex md:justify-between justify-between">
          <Image
            priority
            width={10}
            height={1}
            src={Line}
            alt="logo"
            className="lg:w-[472px] h-[1px] lg:mt-3 md:mt-2 mt-1 md:w-[220px] w-24 sm:w-[200px]"
          />
          <p className="text-white font-medium lg:text-sm text-[9px] md:text-sm sm:text-sm font-OpenSans">
            © 2023 Cornea clinic PVT. LTD. All Rights Reserved.
          </p>
          <Image
            priority
            width={10}
            height={1}
            src={Line3}
            alt="logo"
            className="lg:w-[472px] h-[1px] sm:w-[200px] lg:mt-3 md:mt-2 mt-1 md:w-[225px] w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
