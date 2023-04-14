import Shape from "../public/image/Shape.png";
import Image from "next/image";
import Eyecare from "../public/image/Eyecare.png"
import verified from "../public/svg/verified.svg"
import expert from "../public/svg/expert.svg"
import experienced from "../public/svg/experienced.svg"
import services from "../public/svg/services.svg";

const SectionOne = () => {
  return (
    <div className="">
      <div className=" flex justify-end mr-2 lg:mt-0 mt-10">
        <Image
          priority
          width={900}
          height={1000}
          src={Shape}
          alt="shape"
          className="mt-14 mb-20 lg:w-[800px] lg:h-[450px] xl:w-[800px] xl:h-[450px] md:w-[600px] md:h-[380px] w-[320px] h-[250px] sm:w-[280px] sm:h-[250px]"
        />
      </div>

      <div className="lg:-mt-[520px] md:-mt-[450px] justify-end flex lg:mr-[65px] md:mr-[80px] mr-[40px] -mt-[320px] sm:-mt-[320px] sm:mr-[65px]">
        <h1 className="text-center lg:text-[80px] text-3xl sm:text-2xl md:text-5xl text-[#dddddd] text-opacity-60 lg:tracking-[.32em] md:tracking-[.32em] tracking-[.18em] font-Opensans font-semibold">
          EYECARE
        </h1>
      </div>

      <div className="lg:-mt-[75px] justify-end flex lg:mr-[389px] md:-mt-[52px] md:mr-[220px] -mt-[30px] mr-[70px] sm:mr-[65px] sm:-mt-[30px]">
        <p className="lg:text-xl md:text-base text-secondary text-xs sm:text-sm font-bold font-Caudex">
          "Where clear visions meets <br /> compasionate care"
        </p>
      </div>

      <div>
        <Image
          priority
          width={300}
          height={300}
          src={Eyecare}
          alt="shape"
          className="lg:ml-16 lg:-mt-1 md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] md:ml-14 md:mt-12 w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] mt-8 ml-4 xl:ml-72"
        />
      </div>

      <div className="flex justify-end lg:mr-24 lg:-mt-[230px] md:mr-7 md:-mt-48 -mt-24 mr-0 sm:-mt-24 sm:mr-5">
        <p className="font-Opensans lg:text-sm md:text-xs flex-wrap text-[7px] sm:text-xs md:leading-5 md:flex-wrap text-black lg:leading-6 leading-4 sm:leading-5">
          A specialized medical facility that provides diagnostic, therapeutic,
          and surgical
          <br /> services related to the eyes and vision. We are staffed by
          qualified ophthalmologists
          <br /> and optometrists who are trained to diagnose and treat a wide
          range of eye
          <br /> conditions, such as refractive errors, cataracts, glaucoma,
          macular degeneration,
          <br /> and diabetic retinopathy
        </p>
      </div>
      <div className="flex justify-end lg:mr-[98px] lg:space-x-44 space-x-10 md:space-x-20 md:mr-[70px] mr-20 lg:mt-5 md:mt-5 mt-2">
        <div className="flex">
          <Image
            priority
            width={40}
            height={40}
            src={verified}
            alt="Verified"
            className="md:mt-4 lg:mt-4 sm:mt-3 mt-2 lg:w-10 lg:h-10 md:w-10 md:h-10 w-5 h-5 "
          />
          <p className="lg:mt-6 md:mt-6 mt-3 font-OpenSans lg:text-sm md:text-sm sm:text-xs text-[7px]">
            We are certified doctors
          </p>
        </div>

        <div className="flex">
          <Image
            priority
            width={40}
            height={40}
            src={expert}
            alt="expert"
            className="md:mt-4 lg:mt-4 sm:mt-3 mt-2 lg:w-10 lg:h-10 md:w-10 md:h-10 w-5 h-5 "
          />
          <p className="lg:mt-6 md:mt-6 mt-3 font-OpenSans lg:text-sm md:text-sm sm:text-xs text-[7px] ">
            Expert doctors
          </p>
        </div>
      </div>

      <div className="flex justify-end lg:mr-[78px] lg:space-x-48 md:space-x-[85px] md:mr-[70px] mr-[73px] lg:mt-5 space-x-12 md:mt-5 mt-2">
        <div className="flex ml-0 ">
          <Image
            priority
            width={40}
            height={40}
            src={experienced}
            alt="experienced"
            className="lg:mt-8 md:mt-8 sm:mt-5 mt-4 lg:w-10 lg:h-10 md:w-10 md:h-10 w-5 h-5 "
          />
          <p className="lg:mt-11 md:mt-11 mt-5  font-OpenSans lg:text-sm md:text-sm sm:text-xs text-[7px]">
            Excellence Services
          </p>
        </div>
        <div className="flex md:ml-16  lg:ml-0">
          <Image
            priority
            width={40}
            height={40}
            src={services}
            alt="services"
            className="lg:mt-8 md:mt-8 sm:mt-5 mt-4 lg:w-10 lg:h-10 md:w-10 md:h-10 w-5 h-5"
          />
          <p className="lg:mt-11 md:mt-11 mt-6 font-OpenSans lg:text-sm md:text-sm sm:text-xs text-[7px]">
            Experienced Staff
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
