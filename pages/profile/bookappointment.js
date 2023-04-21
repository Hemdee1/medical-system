import { useEffect, useRef, useState } from "react";
import ProfileLayout from "../../components/ProfileLayout";
import Link from "next/link";
import { CreateApointment } from "../../API Requests/appointment";
import { useAppContext } from "../../context/context";
import timeZones from "../../utils/timeZone";
import json from "../../hospitalsData.json";
import { useRouter } from "next/router";
import getRandom from "../../utils/getRandom";

let hospitals = [];

json.datas.map((data) => {
  const { hospitals: hospi } = data;

  hospi.map((hospital) => {
    hospitals.push(hospital);
  });
});

const BookAppointment = () => {
  const formRef = useRef();
  const route = useRouter();
  const { user, setAppointments } = useAppContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const stateHospitals = json.datas.filter(
    (data) => data.state === user?.state
  )[0]?.hospitals;

  useEffect(() => {
    const hospital = route.query.hospital;
    if (!hospital) return;

    const timeout = setTimeout(() => {
      formRef.current.hospital.value = hospital;
    }, 500);

    return () => clearTimeout(timeout);
  }, [route.query]);

  useEffect(() => {
    const doctors = filteredHospitals.filter(
      (hospital) => hospital.name === selectedHospital
    )[0]?.doctors;

    setFilteredDoctors(doctors);
  }, [selectedHospital]);

  const filterByState = (e) => {
    const check = e.target.checked;

    if (check) {
      setFilteredHospitals(stateHospitals);
    } else {
      setFilteredHospitals(hospitals);
    }
  };

  const autoSelectHospital = () => {
    const hospital = getRandom(stateHospitals);
    setSelectedHospital(hospital.name);

    const doctor = getRandom(hospital.doctors);
    setSelectedDoctor(doctor.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = formRef.current.title.value.trim();
    const date = formRef.current.date.value.trim();
    const time = formRef.current.time.value.trim();
    const hospital = formRef.current.hospital.value.trim();
    const doctor = formRef.current.doctor.value.trim();
    const status = "upcoming";

    if (!title || !date || !time || !hospital || !doctor) return;

    if (!user?.weight || !user?.height) {
      return setError(
        "Error: Your profile information must be updated before you can book an appointment"
      );
    }

    if (new Date(date).getTime() + 86400000 < Date.now()) {
      return setError("Error: You can't fix appointment to a past date");
    }

    const data = { title, date, time, hospital, doctor, status };

    try {
      setError("");
      setLoading(true);
      const appointment = await CreateApointment(data);

      setAppointments((prev) => [appointment, ...prev]);
      route.push({
        pathname: "/profile/appointmentsuccessful",
        query: { id: appointment._id, type: "booked" },
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
          Book An Appointment
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

          {user?.state && (
            <span
              className="px-2 py-2 font-semibold text-center text-white rounded-md cursor-pointer bg-slate-600"
              onClick={autoSelectHospital}
            >
              Auto Select Hospital Base On My Location ({user?.state} State)
            </span>
          )}

          <article>
            <div className="flex items-center justify-between">
              <label
                htmlFor="hospital"
                className="block font-medium font-OpenSans"
              >
                Hospital:
              </label>
              {user?.state && (
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    onChange={filterByState}
                  />
                  <p className="text-sm font-medium">
                    Show {user?.state} State Only
                  </p>
                </div>
              )}
            </div>
            <select
              required
              id="hospital"
              name="hospital"
              value={selectedHospital}
              onChange={(e) => setSelectedHospital(e.target.value)}
              className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
            >
              <option value=""></option>
              {filteredHospitals.map((hospital, index) => (
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
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
            >
              <option value=""></option>
              {filteredDoctors?.map((doctor, index) => (
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
              "Book Appointment"
            )}
          </button>
        </form>
      </main>
    </ProfileLayout>
  );
};

export default BookAppointment;
