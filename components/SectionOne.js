import Shape from "../public/image/Shape.png";
import Image from "next/image";

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

      <div className="-mt-[510px] justify-end flex mr-56">
        <h1 className="text-center text-[90px] text-[#dddddd]">EYECARE</h1>
      </div>

      <div className="-mt-[90px] justify-end flex mr-80">
        <p className="text-xl text-secondary font-bold font-Caudex">
          "Where clear visions meets <br /> compasionate care"
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default SectionOne;
