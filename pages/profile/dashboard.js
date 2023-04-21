import ProfileLayout from "../../components/ProfileLayout";
import Medhistory from "../../components/Medhistory";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { records } from "../../utils/data";
import Link from "next/link";
import { useAppContext } from "../../context/context";
import dateFormat from "dateformat";

const Dashboard = () => {
  const { user, appointments } = useAppContext();

  const [nextAppointment, setNextAppointment] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!appointments) return;

    const next = appointments
      .filter(
        (app) => app.status === "upcoming" || app.status === "rescheduled"
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    setNextAppointment(next[0]);
    setDate(dateFormat(next[0]?.date, "DDDD, mmmm dS, yyyy"));
  }, [appointments]);

  const [selectDate, setSelectDate] = useState(new Date());
  const [selectAppointment, setSelectAppointment] = useState(undefined);

  useEffect(() => {
    const appointment = appointments.find(
      (app) => new Date(app.date).toDateString() === selectDate.toDateString()
    );

    setSelectAppointment(appointment);
  }, [selectDate]);

  const formatAppointmentDay = ({ date }) => {
    for (let i = 0; i < appointments.length; i++) {
      const element = appointments[i].date;

      if (date.toDateString() === new Date(element).toDateString())
        return "highlight";
    }
  };

  return (
    <ProfileLayout>
      <main className="w-full bg-white">
        <div className="px-6 py-6 rounded-none shadow sm:px-12 sm:rounded-2xl bg-gradient-to-r from-blue-50 to-red-50 shadow-gray-400">
          <h3 className="text-base font-semibold font-OpenSans sm:text-xl">
            Upcoming Announcements
          </h3>
          <div className="flex flex-col justify-between gap-10 mt-10 items-center md:flex-row">
            {nextAppointment ? (
              <div className="flex flex-col w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-wider text-primary font-Caudex sm:text-4xl">
                  Your next appointment is arriving soon
                </h2>
                <p className="mt-5 text-lg font-bold font-OpenSans sm:mt-10 text-secondary capitalize sm:text-xl">
                  {nextAppointment?.title ?? ""}
                </p>
                <p className="mt-1 text-base font-semibold font-OpenSans text-secondary sm:text-lg">
                  {date}
                </p>
                <p className="mt-1 text-base font-semibold font-OpenSans text-secondary sm:text-lg">
                  {nextAppointment?.time ?? ""}
                </p>
                <p className="mt-5 text-base font-semibold font-OpenSans text-secondary sm:text-lg">
                  {nextAppointment?.hospital ?? ""}
                </p>
                <p className="mt-1 text-base font-semibold font-OpenSans text-secondary sm:text-lg">
                  {nextAppointment?.doctor ?? ""}
                </p>
                <div className="mt-3">
                  <Link
                    href={{
                      pathname: "/profile/updateappointment",
                      query: { id: nextAppointment?._id },
                    }}
                  >
                    <button className="btn w-[150px] mt-3 sm:mt-6 sm:w-[200px]">
                      Reschedule
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full lg:w-1/2">
                <h2 className="text-2xl font-bold tracking-wider text-primary font-Caudex sm:text-4xl">
                  You don't have any upcoming appointment
                </h2>
                <p className="mt-10 text-base font-semibold font-OpenSans text-secondary sm:text-lg">
                  Health is wealth <br />
                  Make the decision to take care of yourself and your family
                  today.
                </p>

                <div className="mt-3">
                  <Link href="/profile/bookappointment">
                    <button className="btn mt-5 w-[200px]">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            )}
            <div className="w-full lg:w-1/2">
              {/* Date calendar here */}
              <Calendar
                onClickDay={(val) => setSelectDate(val)}
                tileClassName={formatAppointmentDay}
              />
              <div className="mt-5 sm:mt-10 flex items-center justify-center gap-1 flex-col font-semibold text-center">
                <span>{dateFormat(selectDate, "DDDD mmmm dS")}:</span>
                <span className="text-lg">
                  {selectAppointment?.title ?? "No Event"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="w-full px-3 py-6 mt-4 bg-white rounded-lg sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium sm:text-xl">Medical Records</h3>
          <Link className="mt-0 btn" href="/profile/record">
            View All
          </Link>
        </div>
        {user?.weight ? (
          <div className="pl-3 sm:pl-5">
            {records.map((record, index) => (
              <Medhistory data={record} key={index} />
            ))}
          </div>
        ) : (
          <div className="mt-5">
            <p className="text-center font-medium">
              You have no medical record
            </p>
          </div>
        )}
      </main>
    </ProfileLayout>
  );
};

export default Dashboard;
