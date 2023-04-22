import Image from "next/image";
import doctor from "../public/image/doctor frame.png";
import { useAppContext } from "../context/context";
import HospitalList from "../components/HospitalList";
import json from "../hospitalsData.json";
import Link from "next/link";
import Layout from "../components/Layout";
import dateFormat from "dateformat";
import { doctors, hospitalList } from "../utils/data";

const hospitals = json.datas[1];

const Homepage = () => {
  const { user } = useAppContext();

  return (
    <Layout>
      <section className="bg-[#EBFFF5] min-h-[710px]">
        <div className="flex flex-col justify-between max-w-full min-h-full px-5 pt-20 mx-auto w-fullscreen sm:px-20 lg:flex-row">
          <div className="w-full lg:w-[500px] max-w-full text-secondary">
            <h1 className="font-bold text-[32px] sm:text-[40px] font-Caudex">
              “Where clear vision meets compassionate care.”
            </h1>
            <p className="mt-5 text-sm font-OpenSans sm:text-base">
              A specialized medical facility that provides diagnostic,
              therapeutic, and surgical services related to the medical health.
            </p>
            <div className="flex gap-5">
              <Link
                href={user ? "/profile/dashboard" : "/login"}
                className="btn mt-5 rounded-md w-[150px] grid place-items-center transition-all duration-200 hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/hospital"
                className="btn mt-5 rounded-md w-[150px] grid place-items-center transition-all duration-200 hover:scale-105"
              >
                Hospitals
              </Link>
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
                <p className="text-black">
                  {dateFormat(Date.now(), " mmmm dS, yyyy")}
                </p>
              </div>
              <Link
                href="/profile/bookappointment"
                className="btn bg-transparent border-2 border-primary text-primary mt-6 rounded-md w-[150px] grid place-items-center transition-all duration-200 hover:scale-105"
              >
                Book
              </Link>
            </div>
          </div>
          <div className="xl:-mt-32">
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
        <div className="relative max-w-full px-2 mx-auto w-fullscreen sm:px-10 lg:px-0">
          <img
            src="/image/Eyecare.png"
            alt="shape"
            className="absolute object-cover -translate-y-1/2 hidden lg:block left-14 xl:left-32 top-1/2 h-[350px] rounded-xl"
          />
          <div className="w-full lg:w-[75%] border-2 border-primary py-10 pl-5 lg:pl-44 pr-5 xl:pr-20 border-r-0 rounded-2xl rounded-tr-none rounded-br-none font-OpenSans ml-auto">
            <h3 className="text-[30px] font-Caudex font-bold text-primary w-full sm:w-[360px]">
              We improve the quality of care provided to patients{" "}
            </h3>
            <p className="mt-5">
              This is a digital technology infrastructure that supports
              healthcare delivery and management. The platform typically
              includes a variety of software tools, applications, and data
              management systems that are designed to streamline the delivery of
              medical care, improve patient outcomes, and increase efficiency in
              the healthcare industry.
              <br />
              We include electronic medical record (EMR) systems, clinical
              decision support systems (CDSS), telemedicine platforms, patient
              portals, and other healthcare-related software applications. These
              tools enable healthcare providers to access patient data, manage
              appointments, order tests and medications, and communicate with
              patients and other healthcare providers.
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
          Healing communities one hospital at a time <br /> Our network of
          hospitals
        </h3>
        <div className="mt-10">
          <HospitalList data={hospitalList} type="home" />
        </div>
      </section>

      <section className="max-w-full px-5 py-20 mx-auto sm:px-10 sm:py-40 w-fullscreen">
        <h3 className="text-[30px] font-Caudex font-bold text-primary text-center">
          Empowering our doctors to deliver exceptional care with cutting-edge
          technology.{" "}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 sm:mt-20">
          <div className="flex flex-wrap justify-center gap-10">
            {doctors.map((data, index) => (
              <article className="flex items-center flex-col gap-3 w-[250px] rounded-lg overflow-hidden bg-[#EBFFF5]">
                <img
                  src={data.url}
                  alt="doctor"
                  className="w-full h-[200px] object-cover object-top"
                />
                <div className="px-2 py-1">
                  <h3 className="font-semibold">{data.name}</h3>
                  <h4>{data.role}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-20">
        <div className="w-fullscreen mx-auto max-w-full border-t border-gray-200 border-b min-h-[450px] flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="/image/nurse.jpg"
              alt="image"
              className="object-cover w-full h-[300px] sm:h-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center w-full px-5 py-5 lg:w-1/2 sm:px-20">
            <h3 className="text-xl font-bold sm:text-3xl font-Caudex text-secondary">
              Get the care you need, when you need it. <br />
              Make the decision to take care of yourself and your family.
            </h3>
            <h3 className="mt-20 text-xl font-bold sm:text-3xl font-Caudex text-secondary">
              Book your appointment today on our platform{" "}
            </h3>
            <Link href="/profile/bookappointment">
              <button className="btn bg-secondary mt-6 rounded-md w-[150px] transition-all duration-200 hover:scale-105">
                Book
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
