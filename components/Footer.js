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
      <div className="bg-[#EBFFF5] w-full h-28 mt-32">
        <div className="flex justify-evenly">
          <div className="flex border-2 border-primary rounded-2xl px-5 mt-8 py-0 gap-4">
            <Image
              priority
              width={25}
              height={20}
              src={phone}
              alt="logo"
              className=""
            />
            <p className="pt-3 text-black text-sm font-OpenSans">
              Any questions?Call us now
              <br /> <span className="font-bold">9988776655</span>
            </p>
          </div>
          <div className="flex border-2 border-primary rounded-2xl px-5 mt-8 py-0 gap-4">
            <Image
              priority
              width={30}
              height={30}
              src={calendar}
              alt="logo"
              className=""
            />
            <p className="text-black font-base font-OpenSans pt-3">
              We are open from
              <br />{" "}
              <span className="font-bold">Mon - Fri, 10:00am - 3:00pm</span>
            </p>
          </div>
          <div className="flex border-2 border-primary rounded-2xl px-5 mt-8 py-0 gap-4">
            <Image
              priority
              width={30}
              height={30}
              src={mail}
              alt="logo"
              className=""
            />
            <p className="text-black font-base font-OpenSans pt-3">
              {" "}
              Drop us an email
              <br /> <span className="font-bold">corneaclinic@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-80 bg-primary ">
        <div className="pl-20 pt-10 flex justify-between">
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
          <div className="text-white pr-20 space-y-5 font-OpenSans">
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
