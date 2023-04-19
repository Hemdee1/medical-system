import { useState } from "react";
import { FaPen } from "react-icons/fa";

const AppointmentBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`bg-slate-50 px-4 rounded-lg text-base sm:text-lg py-2 shadow-gray-200 shadow-sm font-OpenSans overflow-hidden transition-all duration-300 ${
        open ? "h-44 sm:h-48" : "h-[88px] sm:h-24"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="font-semibold text-lg sm:text-2xl whitespace-nowrap text-ellipsis overflow-hidden">
          Retinal detachment
        </p>
        <p className="text-primary text-sm sm:text-base">Upcoming</p>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <p className="whitespace-nowrap text-ellipsis overflow-hidden">
          Dr. Agu Jonas
        </p>
        <button>
          <FaPen />
        </button>
      </div>
      <p className="mt-1">26 March, 2023</p>
      <p className="mt-1">4:00 PM - 4:30 PM</p>
      <p className="mt-1">Ekiti State Teaching Hospital</p>
    </article>
  );
};

export default AppointmentBox;
