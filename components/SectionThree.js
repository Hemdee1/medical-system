import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";

const SectionThree = () => {
    const slides = [
      {
        url: "https://images.ctfassets.net/pyp8qw75m305/1eknIOEtvy1RxReLyhzFsG/db31f062845df043f3f9703fbee5b6e6/02.24.23_CLARKSON_EYECARE_KANWALPREET_PAVONE_.jpg?w=280&h=360",
        name: "Daniella Johnson"
      },
      {
        url: "https://www.aoa.org/AOA/Images/Patients/Doctor_AdobeStock_330052573.jpeg",
      },
      {
        url: "https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/2977/2019/12/Dr-Antwi-1by1.jpg",
      },
      {
        url: "https://onedoctor.app/images/rectangle-8.png",
      },
      {
        url: "https://www.statnews.com/wp-content/uploads/2021/04/AdobeStock_212196263-645x645.jpeg",
      },
      {
        url: "https://img.freepik.com/premium-photo/your-health-is-important-me-shot-handsome-young-doctor-standing-alone-his-clinic_590464-58132.jpg",
      },
    ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  return (
    <>
      <div className="mt-28 mb-10 sm:mt-28">
        <h1 className="text-center lg:text-[80px] md:text-[75px] text-6xl lg:-mt-0 -mt-10 md:-mt-0 sm:text-6xl text-[#dddddd] text-opacity-30 tracking-[.19em] font-Opensans font-bold">
          EXPERTS
        </h1>
        <p className="lg:text-xl md:text-xl -mt-10 text-base text-secondary font-bold font-Caudex text-center lg:-mt-[50px] md:-mt-[50px] tracking-wider ">
          "Our Eye Specialists."
        </p>
      </div>
      <div className="max-w-[500px] h-[680px] w-full m-auto py-16 px-5 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 border-2 border-black"
        ></div>
        <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
    </>
  );
};
export default SectionThree;