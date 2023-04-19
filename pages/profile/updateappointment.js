import { useEffect, useRef, useState } from "react";
import ProfileLayout from "../../components/ProfileLayout";
import Link from "next/link";
import { UpdateApointment } from "../../API Requests/appointment";
import { useAppContext } from "../../context/context";
import timeZones from "../../utils/timeZone";
import json from "../../hospitalsData.json";
import { useRouter } from "next/router";

let hospitals = [];
let doctors = [];

json.datas.map((data) => {
  const { hospitals: hospi } = data;

  hospi.map((hospital) => {
    hospitals.push(hospital);

    hospital.doctors.map((doctor) => {
      doctors.push(doctor);
    });
  });
});

const UpdateAppointment = () => {
  const formRef = useRef();
  const route = useRouter();
  const { appointments, setAppointments, user } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(user);

  useEffect(() => {
    const id = route.query.id;
    console.log(id);
    const appointment = appointments.find((app) => app._id === id);

    formRef.current.title.value = appointment.title;
    formRef.current.date.value = appointment.date;
    formRef.current.time.value = appointment.time;
    formRef.current.hospital.value = appointment.hospital;
    formRef.current.doctor.value = appointment.doctor;
  }, [route.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = formRef.current.title.value.trim();
    const date = formRef.current.date.value.trim();
    const time = formRef.current.time.value.trim();
    const status = "rescheduled";

    if (!title || !date || !time) return;

    if (new Date(date).getTime() + 86400000 < Date.now()) {
      return setError("Error: You can't fix appointment to a past date");
    }

    const data = { title, date, time, status };

    try {
      setError("");
      setLoading(true);
      const appointment = await UpdateApointment(data, route.query?.id);

      const newAppointments = appointments.map((app) => {
        if (app._id === appointment._id) {
          return appointment;
        }
        return app;
      });

      setAppointments(newAppointments);
      route.push({
        pathname: "/profile/appointmentsuccessful",
        query: { id: appointment._id, type: "rescheduled" },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileLayout>
      <main className="flex flex-col items-center justify-center w-full py-10">
        <h2 className="text-2xl font-semibold sm:text-4xl font-Caudex text-primary">
          Reschedule An Appointment
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-[700px] mt-10 px-5"
        >
          <article>
            <label htmlFor="title" className="block font-medium font-OpenSans">
              Title:
            </label>
            <input
              required
              type="title"
              name="title"
              className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
            />
          </article>
          <div className="flex flex-col justify-between w-full gap-5 sm:flex-row">
            <article className="w-full">
              <label htmlFor="date" className="block font-medium font-OpenSans">
                Date:
              </label>
              <input
                required
                type="date"
                name="date"
                id="date"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
            <article className="w-full">
              <label htmlFor="time" className="block font-medium font-OpenSans">
                Time:
              </label>
              <select
                required
                name="time"
                id="time"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              >
                <option value=""></option>
                {timeZones.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </article>
          </div>

          <article>
            <div className="flex items-center justify-between">
              <label
                htmlFor="hospital"
                className="block font-medium font-OpenSans"
              >
                Hospital:
              </label>
            </div>
            <select
              required
              id="hospital"
              name="hospital"
              disabled
              className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-gray-300 border-2 border-gray-200 rounded-xl outline-primary"
            >
              <option value=""></option>
              {hospitals.map((hospital, index) => (
                <option value={hospital.name} key={index}>
                  {hospital.name}
                </option>
              ))}
            </select>
          </article>
          <article>
            <label htmlFor="doctor" className="block font-medium font-OpenSans">
              Doctor:
            </label>
            <select
              required
              id="doctor"
              name="doctor"
              disabled
              className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-gray-300 border-2 border-gray-200 rounded-xl outline-primary"
            >
              <option value=""></option>
              {doctors?.map((doctor, index) => (
                <option value={doctor.name} key={index}>
                  {doctor.name}, {doctor.specialty}
                </option>
              ))}
            </select>
          </article>

          {error && <p className="font-medium text-red-500">{error}</p>}

          <p className="font-medium text-center text-gray-500 ">
            Note: This appointment will be send along with your information and
            medical history
            <br />
            <Link href="/profile" className="font-bold text-primary">
              View your Profile here
            </Link>
          </p>

          <button className="grid w-full h-10 px-8 mx-auto mt-0 place-items-center btn">
            {loading ? (
              <span className="btn-loader"></span>
            ) : (
              "Reschedule Appointment"
            )}
          </button>
        </form>
      </main>
    </ProfileLayout>
  );
};

export default UpdateAppointment;
