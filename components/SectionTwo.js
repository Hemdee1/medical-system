import datas from "../hospitals.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-flip";


// import styles from "../styles/globals.css"
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import {EffectFlip,  Pagination } from "swiper";



const SectionTwo = () => {
  

  return (
    <div className="">
      <div className="mt-28 mb-10 sm:mt-28">
        <h1 className="text-center lg:text-[80px] md:text-[75px] text-6xl lg:-mt-0 -mt-10 md:-mt-0 sm:text-6xl text-[#dddddd] text-opacity-30 tracking-[.19em] font-Opensans font-bold">
          Services
        </h1>
        <p className="lg:text-xl md:text-xl -mt-10 text-base text-secondary font-bold font-Caudex text-center lg:-mt-[33px] md:-mt-[33px] tracking-wide">
          "Seeing the world in a whole new way."
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
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[EffectFlip, Pagination]}
              className="mySwiper"
            >
              <div className="flex justify-center items-center">
                {data.hospitals.map((hospitals, _index) => {
                  return (
                    <SwiperSlide
                      key={_index}
                      style={{ backgroundColor: "inherit", width: "100px" }}
                    >
                      <div className="w-2/4 h-2/4 m-auto mt-5 mb-5">
                        <img
                          src={hospitals.image_url}
                          alt=""
                          className="w-56 h-56 rounded-xl text-center"
                        />
                      </div>
                      <div className="text-black text-xl font-Caudex font-bold">
                        {hospitals.name}
                      </div>
                      <div>{hospitals.type}</div>
                      <div className="w-3/4 m-auto">
                        <p className="text-black break-words whitespace-normal lg:text-base sm:text-sm md:text-base text-xs font-OpenSans">
                          {hospitals.description}
                        </p>
                      </div>

                      <div className="mb-20 text-black break-words whitespace-normal text-base font-OpenSans">
                        {hospitals.address}
                      </div>
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