import datas from "../hospitals.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-flip";


// import styles from "../styles/globals.css"
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import {EffectFlip,  Navigation } from "swiper";



const SectionTwo = () => {
  

  return (
    <div className="bg-white">
      <div className="mt-28 mb-10 sm:mt-28">
        <h1 className="text-center lg:text-[80px] md:text-[75px] text-6xl lg:-mt-0 -mt-10 md:-mt-0 sm:text-6xl text-[#dddddd] text-opacity-30 tracking-[.15em] font-Opensans font-bold">
          Clinics
        </h1>
        <p className="lg:text-xl md:text-xl -mt-10 text-base text-secondary font-bold font-Caudex text-center lg:-mt-[50px] md:-mt-[50px] tracking-wide">
          "where yoou can find us."
        </p>
      </div>

      {datas.datas.map((data, index) => (
        <div key={index}>
          <div className="text-2xl text-center mt-3 space-y-10">
            {/* {data.state} */}

            <Swiper
              effect={"flip"}
              loop={true}
              // navigation={true}
              spaceBetween={30}
              navigation={true}
              
              modules={[EffectFlip, Navigation]}
              className="mySwiper"
            >
              <div className="flex justify-center items-center">
                {data.hospitals.map((hospitals, _index) => {
                  return (
                    <SwiperSlide
                      key={_index}
                      style={{ backgroundColor: "white", width: "100px" }}
                    >
                      <div className="max-w-[700px] h-[500px] m-auto mt-5 mb-5">
                        <img
                          src={hospitals.image_url}
                          alt=""
                          className="w-56 h-56 rounded-xl text-center"
                        />
                      </div>
                      <div className="text-black text-xl font-Caudex font-bold">
                        {hospitals.name}
                      </div>
                      <div className="mt-3 mb-2 text-secondary break-words whitespace-normal text-sm font-OpenSans">
                        {hospitals.address}
                      </div>
                      <div className="w-[700px] m-auto">
                        <p className="text-black break-words whitespace-normal lg:text-sm sm:text-sm md:text-base text-xs font-serif">
                          {hospitals.description}
                        </p>
                      </div>

                      {/* <div className="mb-10 text-black break-words whitespace-normal text-base font-OpenSans">
                        {hospitals.address}
                      </div> */}
                      {/* <div className="swiper-pagination mt-20"></div> */}
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
        // </div>
      ))}

      <div></div>
    </div>
  );
};

export default SectionTwo;