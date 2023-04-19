import React from "react";

function Medhistory({ type }) {
  return (
    <div className="active px-4 rounded-lg my-4 text-lg lg:text-xl py-2 shadow-gray-400 shadow-md">
      <div className="flex justify-between">
        <p className="font-normal">{type}</p>
        <p className="font-semibold">25 March, 2023</p>
      </div>
      <p className="mt-3">Consultation with Dr. Agu Jonas</p>
    </div>
  );
}

export default Medhistory;
