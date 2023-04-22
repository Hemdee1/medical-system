import doctor from "../public/image/doctor frame.png";
import Image from "next/image";
import location from "../public/image/location.png"
import calendar from "../public/svg/calendar.svg"
import time1 from "../public/image/time1.png";
import { useEffect, useState } from "react";

const Header = () => {
  
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

 function getTime() {
   const now = new Date();
   const hours = now.getHours();
   const minutes = now.getMinutes();
   const amPm = hours >= hours % 18 ? 'PM' : 'AM';
   const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
   const formattedMinutes = minutes < 10 ? `O${minutes}` : minutes;
   return `${formattedHours}:${formattedMinutes} ${amPm}`


 }

  return (
    <div className="bg-[#EBFFF5] w-full h-full rounded-b-3xl relative lg:pb-10 pb-[130px] md:pb-10">
      <div className="lg:flex lg:justify-around lg:flex-row md:flex md:pt-12 pt-0 md:justify-around md:flex-row lg:pt-12 sm:flex-col flex-col">
        <div className="lg:pl-7 xl:pl-7">
          <h1 className="lg:text-[30px] xl:text-[40px] md:pl-7 pl-7 sm:pl-7 lg:pl-0 md:text-xl text-3xl sm:text-5xl text-black md:-mt-5 pt-[110px] sm:pt-24 xl:leading-8 font-Caudex">
            "Where clear vision meets
            <br />
            <span> compasionate care".</span>
          </h1>
          <p className="mt-5 md:text-[10px] lg:text-sm sm:text-sm text-base text-black  font-OpenSans md:pl-7 pl-7 sm:pl-7 lg:pl-0 leading-6 xl:pt-3 lg:pt-3">
            A specialized medical facility that provides diagnostic,
            <br /> therapeutic, and surgical services related to the eyes and{" "}
            <br />
            vision.
          </p>
        </div>

        <div className="">
          <Image
            priority
            width={560}
            height={900}
            src={doctor}
            alt="logo"
            className="lg:-mt-20 md:-mt-[50px] z-10 -mt-16 sm:-mt-16 sm:ml-14 md:w-[410px] md:h-[450px] lg:w-[550px] xl:mr-10 lg:h-[600px] md:mr-7"
          />
        </div>
      </div>

      <div className="bg-white lg:w-[58%] xl:w-[54%] w-[90%] sm:w-[70%] h-36 md:w-[54%] lg:h-44 md:h-[155px] shadow-lg rounded-lg absolute lg:left-[33px] xl:left-[70px] xl:top-[340px] lg:top-[340px] top-[605px] sm:top-[780px] left-[25px] md:top-[300px] md:left-[35px] bg-opacity-60 p-1 sm:left-[80px]">
        <div className="flex justify-between p-2 mt-3 mb-1">
          <h1 className="text-secondary font-OpenSans lg:text-xl md:text-lg text-sm sm:text-sm mt-2">
            Book an Appointment
          </h1>
          <button className="border-2 font-OpenSans border-primary rounded-xl text-primary lg:text-lg lg:px-5 lg:py-[7px] md:px-5 md:text-xs md:py-[5px] px-[20px] py-[5px]  hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out text-sm sm:text-sm xl:mr-5 md:mr-1">
            Reschedule & book
          </button>
        </div>

        <div className="flex justify-evenly pt-5">
          <div className="flex">
            <Image
              priority
              width={20}
              height={20}
              src={location}
              alt="location"
              className="lg:w-10 lg:h-10 w-5 h-5"
            />
            <p className="text-black lg:text-base md:text-xs text-[8px] sm:text-xs">
              Shivranjani <br />
              cross road
            </p>
          </div>
          <div className="flex md:pl-3 lg:pl-[2px]">
            <Image
              priority
              width={20}
              height={20}
              src={calendar}
              alt="calender"
              className="lg:w-5 lg:h-5 mt-3 md:w-5 md:h-5 w-5 h-5"
            />
            <p className="text-black lg:text-base md:text-xs text-[8px] sm:text-xs">
              10 April, <br />
              2023 Monday
            </p>
          </div>
          <div className="flex lg:pr-[2px]">
            <Image
              priority
              width={20}
              height={20}
              src={time1}
              alt="time"
              className="lg:w-10 lg:h-10 w-5 h-5 mt-1"
            />
            <p className="mt-2 text-black lg:text-base md:text-xs text-[8px] sm:text-xs">
              {time}
              {/* 11:00 am */}
            </p>
          </div>
          <div className="md:-mt-1 lg:-mt-2">
            <button className="bg-primary border-transparent text-[9px] sm:text-xs hover:bg-white hover:border-primary text-white lg:px-[54px] md:px-[38px] py-[7px] px-[45px] md:py-[5px]  lg:py-[7px] rounded-xl lg:text-lg md:text-xs hover:text-primary font-OpenSans border-2 transition-colors duration-200 ease-in-out ">
              Book today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
