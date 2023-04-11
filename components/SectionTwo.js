import datas from "../hospitals.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-flip";


// import styles from "../styles/globals.css"
import "swiper/css";
import "swiper/css/navigation";
import {EffectFlip, Navigation, } from "swiper";



const SectionTwo = () => {
  

  return (
    <div className="">
      <div className="mt-20">
        <h1 className="text-center text-[80px] text-[#dddddd] text-opacity-30 tracking-[.19em] font-Opensans font-bold">
          Services
        </h1>
        <p className="text-xl text-secondary font-bold font-Caudex text-center -mt-[68px] tracking-wide">
          "Seeing the world in a whole new way."
        </p>
      </div>

      {datas.datas.map((data, index) => (
        <div key={index}>
          <div className="text-2xl text-center mt-3 space-y-10">
            {data.state}

            <Swiper
              effect={"flip"}
              
              loop={true}
              navigation={true}
              modules={[EffectFlip, Navigation]}
              className="mySwiper"
            >
              <div className="flex justify-center items-center">
                {data.hospitals.map((hospitals, _index) => {
                  return (
                    <SwiperSlide key={_index} className="bg-blue-100">
                      <div className="w-72 h-72 m-auto mt-5 mb-5">
                        <img
                          src={hospitals.image_url}
                          alt=""
                          className="w-56 h-56 rounded-xl text-center"
                        />
                      </div>
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