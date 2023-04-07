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
      <div className=" flex justify-end mr-2">
        <Image
          priority
          width={900}
          height={1000}
          src={Shape}
          alt="shape"
          className="mt-14 mb-20"
        />
      </div>

      <div className="-mt-[505px] justify-end flex mr-40">
        <h1 className="text-center text-[80px] text-[#dddddd] text-opacity-20 tracking-[.32em] font-Opensans font-semibold">
          EYECARE
        </h1>
      </div>

      <div className="-mt-[85px] justify-end flex mr-[407px]">
        <p className="text-xl text-secondary font-bold font-Caudex">
          "Where clear visions meets <br /> compasionate care"
        </p>
      </div>

      <div>
        <Image
          priority
          width={350}
          height={300}
          src={Eyecare}
          alt="shape"
          className="ml-44 -mt-14"
        />
      </div>

      <div className="flex justify-end mr-32 -mt-[260px]">
        <p className="font-Opensans text-sm text-black leading-6">
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
      <div className="flex justify-end mr-[98px] space-x-40">
        <div className="flex">
          <Image
            priority
            width={40}
            height={40}
            src={verified}
            alt="Verified"
            className="mt-4"
          />
          <p className="mt-6 font-OpenSans text-sm">We are certified doctors</p>
        </div>

        <div className="flex">
          <Image
            priority
            width={40}
            height={40}
            src={expert}
            alt="expert"
            className="mt-4"
          />
          <p className="mt-6 font-OpenSans text-sm">Expert doctors</p>
        </div>
      </div>

      <div className="flex justify-end mr-[78px] space-x-48">
        <div className="flex">
          <Image
            priority
            width={40}
            height={40}
            src={experienced}
            alt="experienced"
            className="mt-8"
          />
          <p className="mt-11 font-OpenSans text-sm">Excellence Services</p>
        </div>
        <div className="flex">
          <Image
            priority
            width={40}
            height={40}
            src={services}
            alt="services"
            className="mt-8"
          />
          <p className="mt-11 font-OpenSans text-sm">Experienced Staff</p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
