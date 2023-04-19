import { useState } from "react";
import json from "../hospitals.json";
import HospitalButton from "./HospitalButton";

const HospitalList = ({ data }) => {
  // const data = json.datas[0];

  const [selectedHospital, setSelectedHospital] = useState(data.hospitals[0]);

  return (
    <article className="pb-20">
      <h1 className="mb-3 text-xl font-bold text-center sm:text-3xl font-OpenSans">
        {data.state} State
      </h1>
      <div className="relative flex flex-col lg:flex-row">
        <div className="relative w-full px-5 py-3 text-sm sm:px-10 sm:text-base lg:w-1/2 bg-slate-100">
          <h2 className="mb-2 text-lg font-semibold sm:mb-5 sm:text-2xl font-Caudex">
            {selectedHospital.name}
          </h2>
          <div className="flex flex-col gap-1 sm:gap-3 font-OpenSans">
            <span className="flex gap-1">
              <h4 className="text-gray-700">Type:</h4>
              <h4 className="font-semibold">{selectedHospital.type}</h4>
            </span>
            <span className="flex gap-1">
              <h4 className="text-gray-700">Address:</h4>
              <h4 className="font-semibold">{selectedHospital.address}s</h4>
            </span>
            <span className="">
              <h4 className="text-gray-700">Description:</h4>
              <h4 className="font-semibold">{selectedHospital.description}</h4>
            </span>
            <span className="flex flex-col gap-1">
              <h4 className="text-gray-700">Doctors:</h4>
              <div>
                {selectedHospital.doctors.map((doctor, index) => (
                  <h4 key={index} className="font-semibold">
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
          <button className="absolute mt-0 border-2 top-3 btn right-5 border-slate-700">
            Book Appointment
          </button>
        </div>
        <div className="absolute flex items-center justify-between max-w-full gap-5 px-4 py-2 overflow-x-scroll -translate-x-1/2 bg-white bg-opacity-50 border border-gray-400 shadow-md sm:rounded-lg sm:px-8 sm:py-4 sm:overflow-auto left-1/2 -bottom-14 shadow-gray-400 backdrop-blur-sm">
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
