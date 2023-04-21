import Image from "next/image";
import doctor from "../public/image/doctor frame.png";
import { useAppContext } from "../context/context";
import HospitalList from "../components/HospitalList";
import json from "../hospitalsData.json";
import Link from "next/link";

const hospitals = json.datas[1];

const Homepage = () => {
  const { user } = useAppContext();

  return (
    <main>
      <section className="bg-[#EBFFF5] min-h-[710px]">
        <div className="flex flex-col items-center justify-between max-w-full min-h-full px-5 pt-20 mx-auto w-fullscreen sm:px-20 lg:flex-row">
          <div className="w-full lg:w-[500px] max-w-full text-secondary">
            <h1 className="font-bold text-[32px] sm:text-[40px] font-Caudex">
              “Where clear vision meets compassionate care.”
            </h1>
            <p className="mt-5 text-sm font-OpenSans sm:text-base">
              A specialized medical facility that provides diagnostic,
              therapeutic, and surgical services related to the eyes and vision.
            </p>
            <div className="flex gap-5">
              <button className="btn mt-5 rounded-md w-[150px] transition-all duration-200 hover:scale-105">
                Login
              </button>
              <button className="btn mt-5 rounded-md w-[150px] transition-all duration-200 hover:scale-105">
                Hospitals
              </button>
            </div>

            <div className="px-5 py-3 mt-20 tracking-wider bg-white bg-opacity-50 rounded-lg shadow backdrop-blur-sm shadow-gray-400 font-OpenSans w-[500px] max-w-full">
              <h4 className="text-base font-bold sm:text-xl text-secondary">
                Book an appointment with your nearest hospital today.
              </h4>
              <div className="flex items-center gap-2 mt-6 text-sm font-semibold sm:text-base">
                <Image
                  priority
                  width={25}
                  height={25}
                  src="/svg/calendar.svg"
                  alt="calender"
                />
                <p className="text-black">10 April, 2023 Monday</p>
              </div>
              <button className="btn bg-transparent border-2 border-primary text-primary mt-6 rounded-md w-[150px] transition-all duration-200 hover:scale-105">
                Book
              </button>
            </div>
          </div>
          <div className="">
            <Image
              priority
              width={560}
              height={900}
              src={doctor}
              alt="logo"
              className="z-10 max-w-full scale-110 sm:scale-100"
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen py-20">
        <div className="relative max-w-full px-5 mx-auto w-fullscreen sm:px-10 lg:px-0">
          <img
            src="/image/Eyecare.png"
            alt="shape"
            className="absolute object-cover -translate-y-1/2 hidden lg:block left-14 xl:left-32 top-1/2 h-[200px] rounded-xl"
          />
          <div className="w-full lg:w-[75%] border-2 border-primary py-10 pl-5 lg:pl-44 pr-5 xl:pr-20 border-r-0 rounded-2xl rounded-tr-none rounded-br-none font-OpenSans ml-auto">
            <h3 className="text-[30px] font-Caudex font-bold text-primary w-full sm:w-[360px]">
              "Where clear vision meets compassionate care."
            </h3>
            <p className="mt-5">
              A specialized medical facility that provides diagnostic,
              therapeutic, and surgical services related to the eyes and vision.
              We are staffed by qualified ophthalmologists and optometrists who
              are trained to diagnose and treat a wide range of eye conditions,
              such as refractive errors, cataracts, glaucoma, macular
              degeneration, and diabetic retinopathy.
            </p>
            <div className="flex flex-wrap gap-5 mt-5">
              <article className="flex items-center gap-3 min-w-[250px]">
                <img src="/svg/verified.svg" alt="icon" />
                <h4 className="text-base sm:text-lg">We are certified</h4>
              </article>
              <article className="flex items-center gap-3 min-w-[250px]">
                <img src="/svg/expert.svg" alt="icon" />
                <h4 className="text-base sm:text-lg">Expert Doctors</h4>
              </article>
            </div>
            <div className="flex flex-wrap gap-5 mt-5">
              <article className="flex items-center gap-3 min-w-[250px]">
                <img src="/svg/experienced.svg" alt="icon" />
                <h4 className="text-base sm:text-lg">Excellent Services</h4>
              </article>
              <article className="flex items-center gap-3 min-w-[250px]">
                <img src="/svg/services.svg" alt="icon" />
                <h4 className="text-base sm:text-lg">Experienced staff</h4>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-full mx-auto w-fullscreen">
        <h3 className="text-[30px] font-Caudex font-bold text-primary text-center">
          "Seeing the world in a whole new way."
        </h3>
        <div className="mt-10">
          <HospitalList data={hospitals} type="home" />
        </div>
      </section>

      <section className="max-w-full px-5 py-20 mx-auto sm:px-10 sm:py-40 w-fullscreen">
        <h3 className="text-[30px] font-Caudex font-bold text-primary text-center">
          "Seeing the world in a whole new way."
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 sm:mt-20">
          <div className="flex flex-wrap justify-center gap-10">
            <article className="flex items-center flex-col gap-3 min-w-[250px] rounded-lg overflow-hidden bg-[#EBFFF5]">
              <img
                src="/image/Eyecare.png"
                alt="doctor"
                className="w-full h-[200px] object-cover"
              />
              <div className="px-2 py-1">
                <h3 className="font-semibold">Dr Olorunfemi Ajayi</h3>
                <h4>Nursing and Gyelogist</h4>
              </div>
            </article>
            <article className="flex items-center flex-col gap-3 min-w-[250px] rounded-lg overflow-hidden bg-[#EBFFF5]">
              <img
                src="/image/Eyecare.png"
                alt="doctor"
                className="w-full h-[200px] object-cover"
              />
              <div className="px-2 py-1">
                <h3 className="font-semibold">Dr Olorunfemi Ajayi</h3>
                <h4>Nursing and Gyelogist</h4>
              </div>
            </article>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <article className="flex items-center flex-col gap-3 min-w-[250px] rounded-lg overflow-hidden bg-[#EBFFF5]">
              <img
                src="/image/Eyecare.png"
                alt="doctor"
                className="w-full h-[200px] object-cover"
              />
              <div className="px-2 py-1">
                <h3 className="font-semibold">Dr Olorunfemi Ajayi</h3>
                <h4>Nursing and Gyelogist</h4>
              </div>
            </article>
            <article className="flex items-center flex-col gap-3 min-w-[250px] rounded-lg overflow-hidden bg-[#EBFFF5]">
              <img
                src="/image/Eyecare.png"
                alt="doctor"
                className="w-full h-[200px] object-cover"
              />
              <div className="px-2 py-1">
                <h3 className="font-semibold">Dr Olorunfemi Ajayi</h3>
                <h4>Nursing and Gyelogist</h4>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-20">
        <div className="w-fullscreen mx-auto max-w-full border-t border-gray-200 border-b min-h-[450px] flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="/image/Eyecare.png"
              alt="image"
              className="object-cover w-full h-[300px] sm:h-full"
            />
          </div>
          <div className="w-full px-5 py-5 lg:w-1/2 sm:px-20">
            <h3 className="text-xl font-bold sm:text-3xl font-Caudex text-secondary">
              Health is wealth <br />
              Make the decision to take care of yourself and your family.
            </h3>
            <h3 className="mt-20 text-xl font-bold sm:text-3xl font-Caudex text-secondary">
              Book an appointment today
            </h3>
            <Link href="/profile/bookappointment">
              <button className="btn bg-secondary mt-6 rounded-md w-[150px] transition-all duration-200 hover:scale-105">
                Book
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
