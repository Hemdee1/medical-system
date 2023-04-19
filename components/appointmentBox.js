import { useState } from "react";
import { MdCancel, MdFreeCancellation } from "react-icons/md";
import { UpdateApointment } from "../API Requests/appointment";
import { useAppContext } from "../context/context";
import Link from "next/link";
import dateFormat from "dateformat";

const AppointmentBox = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { setAppointments, appointments } = useAppContext();

  const handleCancel = async () => {
    try {
      const update = appointments.map((app) => {
        if (app._id === data._id) {
          return { ...app, status: "cancelled" };
        }
        return app;
      });

      setAppointments(update);

      await UpdateApointment({ status: "cancelled" }, data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article
      className={`bg-slate-50 px-4 rounded-lg text-base sm:text-lg py-2 shadow-gray-200 shadow-sm font-OpenSans overflow-hidden transition-all duration-300 ${
        open ? "h-56" : "h-[85px] sm:h-[93px]"
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p
          className={`overflow-hidden text-lg font-semibold capitalize sm:text-2xl ${
            !open ? "whitespace-nowrap text-ellipsis" : ""
          }`}
        >
          {data?.title}
        </p>
        <p
          className={`text-sm capitalize font-medium sm:text-base ${
            data?.status === "completed"
              ? "text-secondary"
              : data?.status === "cancelled"
              ? "text-red-600"
              : "text-primary"
          }`}
        >
          {data?.status}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
          {data?.doctor}
        </p>

        {(data?.status === "upcoming" || data?.status === "rescheduled") && (
          <div className="flex justify-center gap-3 sm:gap-5">
            <button className="relative group" onClick={handleCancel}>
              <span className="absolute right-0 invisible px-2 py-1 text-xs font-medium bg-white rounded-sm shadow opacity-0 -top-6 group-hover:opacity-100 group-hover:visible">
                Cancel
              </span>
              <MdCancel className="text-2xl text-red-700" />
            </button>

            <Link
              href={{
                pathname: "/profile/updateappointment",
                query: { id: data?._id },
              }}
            >
              <button className="relative group">
                <span className="absolute right-0 invisible px-2 py-1 text-xs font-medium bg-white rounded-sm shadow opacity-0 -top-6 group-hover:opacity-100 group-hover:visible">
                  Reschedule
                </span>
                <MdFreeCancellation className="mt-2 text-2xl text-primary" />
              </button>
            </Link>
          </div>
        )}
      </div>
      <p className="mt-1">
        {data?.date ? dateFormat(data?.date, "dddd mmmm dS yyyy") : ""}
      </p>
      <p className="mt-1">{data?.time}</p>
      <p className="mt-1">{data?.hospital}</p>
    </article>
  );
};

export default AppointmentBox;
