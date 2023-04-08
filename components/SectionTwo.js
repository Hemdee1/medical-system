// import Logo from "../public/image/Logo.png";
import Image from "next/image";
import datas from "../hospitals.json";

const SectionTwo = () => {
  return (
    <div className="">
      <div className="mt-20">
        <h1 className="text-center text-[80px] text-[#dddddd] text-opacity-20 tracking-[.19em] font-Opensans font-bold">
          Services
        </h1>
        <p className="text-xl text-secondary font-bold font-Caudex text-center -mt-14 tracking-wide">
          "Seeing the world in a whole new way."
        </p>
      </div>
      
        {datas.hospitals.map((hospitals, index) => (
          <div>
            <Image
              key={index}
              priority
              width={100}
              height={100}
              src={hospitals.image_url}
              alt="logo"
              className="mt-4 z-10"
            />
          </div>
        ))}
     
      <div>

      </div>
    </div>
  );
};

export default SectionTwo;