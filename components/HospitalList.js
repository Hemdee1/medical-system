import { useState } from "react";
import HospitalButton from "./HospitalButton";
import Link from "next/link";
import { useAppContext } from "../context/context";

const HospitalList = ({ data, type }) => {
  const { user } = useAppContext();
  const [selectedHospital, setSelectedHospital] = useState(data.hospitals[0]);

  return (
    <article className="pb-20">
      {!type && (
        <h1 className="mb-3 text-xl font-bold text-center sm:text-3xl font-OpenSans">
          {data.state} State
        </h1>
      )}
      <div className="relative flex flex-col lg:flex-row">
        <div className="relative w-full px-5 py-5 text-sm sm:px-10 sm:text-base lg:w-1/2 bg-[#EBFFF5]">
          <h2 className="mb-2 text-lg font-semibold sm:mb-5 sm:text-2xl font-Caudex">
            {selectedHospital.name}
          </h2>
          <div className="flex flex-col gap-1 sm:gap-3 font-OpenSans">
            <span className="flex gap-1">
              <h4 className="text-gray-700">Type:</h4>
              <h4 className="font-medium leading-relaxed">
                {selectedHospital.type}
              </h4>
            </span>
            <span className="flex gap-1">
              <h4 className="text-gray-700">Address:</h4>
              <h4 className="font-medium leading-relaxed">
                {selectedHospital.address}s
              </h4>
            </span>
            <span className="">
              <h4 className="text-gray-700">Description:</h4>
              <h4 className="font-medium leading-relaxed">
                {selectedHospital.description}
              </h4>
            </span>
            <span className="flex flex-col gap-1">
              <h4 className="text-gray-700">Doctors:</h4>
              <div>
                {selectedHospital.doctors.map((doctor, index) => (
                  <h4 key={index} className="font-medium leading-relaxed">
                    {doctor.name}, {doctor.specialty}
                  </h4>
                ))}
              </div>
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[600px] relative">
          <img
            // src="/image/Eyecare.png"
            src={selectedHospital.image_url}
            alt="hospital image"
            className="object-cover w-full h-full "
          />

          {type !== "home" ? (
            <div>
              {user ? (
                <Link
                  href={{
                    pathname: "/profile/bookappointment",
                    query: { hospital: selectedHospital?.name },
                  }}
                  className="absolute mt-0 border-2 top-3 btn right-5 border-slate-700"
                >
                  Book Appointment
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="absolute mt-0 border-2 top-3 btn right-5 border-slate-700"
                >
                  Book Appointment
                </Link>
              )}
            </div>
          ) : (
            <Link
              href="/hospital"
              className="absolute mt-0 border-2 top-3 btn right-5 border-slate-700"
            >
              View All Hospitals
            </Link>
          )}
        </div>
        <div className="absolute flex items-center justify-between max-w-full gap-5 px-4 py-2 overflow-x-scroll -translate-x-1/2 bg-white bg-opacity-50 border border-gray-400 shadow-md scrollbar-thumb-slate-300 scrollbar sm:rounded-lg sm:px-8 sm:py-4 sm:overflow-auto left-1/2 -bottom-14 shadow-gray-400 backdrop-blur-sm">
          {data.hospitals.map((hospital, index) => (
            <HospitalButton
              key={index}
              data={hospital}
              selectedHospital={selectedHospital}
              setSelectedHospital={setSelectedHospital}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default HospitalList;
