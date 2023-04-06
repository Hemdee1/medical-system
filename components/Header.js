import doctor from "../public/image/doctor frame.png";
import Image from "next/image";
import location from "../public/image/location.png"
import calender from "../public/image/calender.png"
import time from "../public/image/time.png";

const Header = () => {
  return (
    <div className="bg-[#EBFFF5] w-full h-full rounded-b-3xl relative pb-10">
      <div className="flex justify-around">
        <div>
          <h1 className="text-[40px] text-black mt-20 font-Caudex">
            "Where clear vision meets
            <br />
            <span> compasionate care".</span>
          </h1>
          <p className="mt-5 text-base font-OpenSans">
            {" "}
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
            className="-mt-20 z-10"
          />
        </div>
      </div>

      <div className="bg-white w-[55%] h-44 shadow-lg rounded-lg  z-20 absolute left-[65px] top-[345px] bg-opacity-60 p-1">
        <div className="flex justify-between p-5">
          <h1 className="text-secondary font-OpenSans text-xl mt-2">
            Book an Appointment
          </h1>
          <button className="border-2 font-OpenSans border-primary rounded-xl text-primary text-[18px] px-5 py-[7px] hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
            Reschedule & book
          </button>
        </div>

        <div className="flex justify-around pt-5">
          <div className="flex">
            <Image
              priority
              width={20}
              height={20}
              src={location}
              alt="location"
              className="w-10 h-10"
            />
            <p>
              Shivranjani <br />
              cross road
            </p>
          </div>
          <div className="flex">
            <Image
              priority
              width={20}
              height={20}
              src={calender}
              alt="calender"
              className="w-10 h-10"
            />
            <p>
              10 April, <br />
              2023 Monday
            </p>
          </div>
          <div className="flex">
            <Image
              priority
              width={20}
              height={20}
              src={time}
              alt="time"
              className="w-10 h-10"
            />
            <p className="text-sm mt-2">11:00 am</p>
          </div>
          <div className="-mt-2">
            <button className="bg-primary border-transparent hover:bg-white hover:border-primary text-white px-[54px] py-[7px] rounded-xl text-lg hover:text-primary font-OpenSans border-2 transition-colors duration-200 ease-in-out">
              Book today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
