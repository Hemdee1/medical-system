import React from "react";

function Medhistory({ data }) {
  return (
    <div
      className={
        "px-4 py-2 my-4 text-lg rounded-lg shadow lg:text-xl shadow-gray-400 " +
        data.color
      }
    >
      <div className="flex justify-between">
        <p className="font-normal">{data.title}</p>
        <p className="font-semibold">{data.date}</p>
      </div>
      <p className="mt-3">{data.info}</p>
    </div>
  );
}

export default Medhistory;
