import { useEffect, useState } from "react";
import ProfileLayout from "../../components/ProfileLayout";
import AppointmentBox from "../../components/appointmentBox";
import { useAppContext } from "../../context/context";

const category = ["All", "Upcoming", "Completed", "Rescheduled", "Cancelled"];

const Appointment = () => {
  const { appointments } = useAppContext();

  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    setFilteredAppointments(appointments);
  }, [appointments]);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();

    if (value === "all") {
      return setFilteredAppointments(appointments);
    }

    setFilteredAppointments(appointments.filter((app) => app.status === value));
  };

  return (
    <ProfileLayout>
      <main className="w-full px-5">
        <div>
          <div className="flex items-center justify-end gap-4 my-5 scale-90 sm:scale-100">
            <label className="text-sm sm:text-base">Show</label>
            <select
              name="show"
              id="show"
              className="px-4 py-2 text-sm border-2 border-gray-200 rounded-md cursor-pointer sm:text-base outline-primary text-primary"
              onChange={handleFilter}
            >
              {category.map((cate, index) => (
                <option value={cate} key={index}>
                  {cate}
                </option>
              ))}
            </select>
          </div>
          {appointments.length > 0 && (
            <p className="mb-4 text-sm font-medium sm:text-base">
              Click on appointment title to see more details about the
              appointment.
            </p>
          )}
        </div>

        {appointments.length > 0 ? (
          <div className="flex flex-col gap-5">
            {filteredAppointments.map((app) => (
              <AppointmentBox key={app._id} data={app} />
            ))}
          </div>
        ) : (
          <div className="min-h-[70vh] w-full grid place-items-center">
            <p className="font-medium">No appointments to display</p>
          </div>
        )}
      </main>
    </ProfileLayout>
  );
};

export default Appointment;
