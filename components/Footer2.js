import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#EBFFF5]">
        <div className="flex flex-col items-center justify-center max-w-full px-10 lg:flex-row gap-11 w-fullscreen max-auto py-7">
          <div className="flex gap-5 max-w-full w-[350px] px-6 py-3 border-2 border-primary rounded-2xl">
            <Image
              priority
              width={30}
              height={30}
              src="/svg/phone.svg"
              alt="logo"
            />
            <p className="flex flex-col font-OpenSans">
              Any questions? Call us now
              <a href="tel:+2349032104288" className="font-bold">
                +2349032104288
              </a>
            </p>
          </div>
          <div className="flex gap-5 max-w-full w-[350px] px-6 py-3 border-2 border-primary rounded-2xl">
            <Image
              priority
              width={30}
              height={30}
              src="/svg/calendar.svg"
              alt="logo"
            />
            <p className="flex flex-col font-OpenSans">
              We are open from
              <span className="font-bold">Mon - Fri, 10:00am - 3:00pm</span>
            </p>
          </div>
          <div className="flex gap-5 max-w-full w-[350px] px-6 py-3 border-2 border-primary rounded-2xl">
            <Image
              priority
              width={30}
              height={30}
              src="/svg/mail.svg"
              alt="logo"
            />
            <p className="flex flex-col font-OpenSans">
              Drop us an email
              <span className="font-bold">corneaclinic @gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary ">
        <div className="flex justify-between pt-10 pl-5 lg:pl-16 lg:flex lg:justify-between md:flex md:justify-between md:pl-12 sm:pl-8 sm:justify-between">
          <div>
            <div>
              <Image
                priority
                width={150}
                height={150}
                src="/svg/logo.svg"
                alt="logo"
                className="w-20 h-10 mt-2 lg:w-32 lg:h-16 md:w-24 md:h-10 sm:w-24 sm:h-10"
              />
            </div>
            <div className="flex gap-2 pt-3">
              <Image
                priority
                width={20}
                height={20}
                src="/svg/location.svg"
                alt="map"
                className="w-5 h-5 mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8"
              />
              <p className="mt-3 text-white text-sm sm:text-base font-OpenSans">
                27, Adetola Street
                <br /> Abuja, Nigeria
              </p>
            </div>
            <div className="flex gap-10 pt-4">
              <button>
                <Image
                  priority
                  width={30}
                  height={30}
                  src="/svg/twitter.svg"
                  alt="twitter"
                  className="w-5 h-5 mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8"
                />
              </button>
              <button>
                <Image
                  priority
                  width={30}
                  height={30}
                  src="/svg/instagram.svg"
                  alt="instagram"
                  className="w-5 h-5 mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8"
                />
              </button>
              <button>
                <Image
                  priority
                  width={30}
                  height={30}
                  src="/svg/facebook.svg"
                  alt="facebook"
                  className="w-5 h-5 mt-4 lg:w-8 lg:h-8 md:w-8 md:h-8"
                />
              </button>
            </div>
          </div>
          <div className="pr-5 space-y-5 flex flex-col gap-3 items-start text-white text-sm sm:text-base lg:pr-16 md:pr-12 sm:pr-8 font-OpenSans">
            <h2 className="font-bold uppercase">Quick Links</h2>
            <button className="">About</button>
            <button className="">Services</button>
            <button className="">Hospital</button>
            <button className="">Dashboard</button>
          </div>
        </div>
        <div className="w-full mt-24">
          <p className="py-3 px-10 font-medium text-sm sm:text-base text-center text-white border-t border-white font-OpenSans">
            © 2023 Cornea clinic PVT. LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
