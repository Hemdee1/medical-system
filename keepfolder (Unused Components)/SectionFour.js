

import Eyecheckup from "../public/image/Eyecheckup.png";
import Image from "next/image";

const SectionFour = () => {
  
  return (
    <div>
      <div className="mt-28 mb-10 sm:mt-28">
        <h1 className="text-center lg:text-[80px] md:text-[75px] text-6xl lg:-mt-0 -mt-10 md:-mt-0 sm:text-6xl text-[#dddddd] text-opacity-30 tracking-[.19em] font-Opensans font-bold">
          Services
        </h1>
        <p className="lg:text-xl md:text-xl -mt-10 text-base text-secondary font-bold font-Caudex text-center lg:-mt-[45px] md:-mt-[45px] tracking-wide">
          "Seeing the world in a whole new way."
        </p>
      </div>

      <div className="lg:flex-row lg:justify-between md:flex-col md:justify-center md:flex md:items-center flex-col flex justify-center items-center">
        <div className="mt-10 lg:ml-10 md:ml-0">
          <Image
            priority
            width={600}
            height={700}
            src={Eyecheckup}
            alt="eyecheckup"
            className="lg:w-[400px] lg:h-[300px] xl:w-[600px] xl:h-[400px] w-[280px] h-[250px] md:w-[400px]md:h-[380px]"
          />
        </div>

        <div className="bg-[#EBFFF5] xl:w-[500px] xl:h-[405px] w-[350px] h-[350px] lg:w-[400px] lg:h-[300px] md:w-[400px] md:h-[420px] rounded-lg mr-10 mt-10 p-3 md:ml-10 lg:ml-0 ml-10">
          <h1 className="font-Caudex text-2xl text-black pt-3 pl-3">Eyecare</h1>
          <p className="pt-5 lg:pt-3 xl:pt-5 md:pt-3 leading-5 lg:text-xs xl:text-sm text-[10px] md:text-sm font-serif space-y-7">
            A routine eye checkup is a simple yet important preventative measure
            to maintain healthy vision.
            <br /> During the checkup, an eye care professional will examine
            your eyes and evaluate your visual acuity, eye muscle coordination,
            and eye health.
            <br /> They will use various tests and instruments to check for any
            signs of refractive errors, <br />
            such as nearsightedness or farsightedness, as well as eye diseases
            such as glaucoma and cataracts.
            <br /> Early detection of these conditions is key to preventing
            vision loss, as
            <br /> many eye diseases have no noticeable symptoms in their early
            stages.
            <br /> A routine eye checkup can also help identify other health
            issues,
            <br /> such as high blood pressure or diabetes, as these conditions
            can affect the eyes
          </p>
        </div>
      </div>
    </div>
  );
};
export default SectionFour;