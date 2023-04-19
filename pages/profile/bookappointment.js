import { useRef } from "react";
import ProfileLayout from "../../components/ProfileLayout";
import Link from "next/link";

const times = [
  "8:00 AM - 8:30 AM",
  "9:00 AM - 9:30 AM",
  "10:00 AM - 10:30 AM",
  "11:00 AM - 8:11 AM",
  "12:00 AM - 8:12 AM",
  "1:00 PM - 1:30 PM",
  "2:00 PM - 2:30 PM",
  "3:00 PM - 3:30 PM",
  "4:00 PM - 4:30 PM",
];

const BookAppointment = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yeah");

    const title = formRef.current.title.value.trim();
    const date = formRef.current.date.value.trim();
    const time = formRef.current.time.value.trim();
    const hospital = formRef.current.hospital.value.trim();
    const doctor = formRef.current.doctor.value.trim();

    if (!title || !date || !time || !hospital || !doctor) return;

    console.log({ title, date, time, hospital, doctor });
  };

  return (
    <ProfileLayout>
      <main className="w-full flex flex-col justify-center items-center py-10">
        <h2 className="font-semibold text-2xl sm:text-4xl font-Caudex text-primary">
          Book An Appointment
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-[700px] mt-10 px-5"
        >
          <article>
            <label htmlFor="title" className="block font-OpenSans font-medium">
              Title:
            </label>
            <input
              required
              type="title"
              name="title"
              className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-full outline-primary font-medium tracking-wide"
            />
          </article>
          <div className="flex flex-col gap-5 sm:flex-row justify-between">
            <article>
              <label htmlFor="date" className="block font-OpenSans font-medium">
                Date:
              </label>
              <input
                required
                type="date"
                name="date"
                id="date"
                className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-full outline-primary font-medium tracking-wide"
              />
            </article>
            <article>
              <label htmlFor="time" className="block font-OpenSans font-medium">
                Time:
              </label>
              <select
                required
                name="time"
                id="time"
                className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-full outline-primary font-medium tracking-wide"
              >
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </article>
          </div>

          <span className="px-2 py-2 text-center rounded-md bg-slate-600 text-white font-semibold cursor-pointer">
            Auto Select Hospital Base On My Location
          </span>

          <article>
            <label
              htmlFor="hospital"
              className="block font-OpenSans font-medium"
            >
              Hospital:
            </label>
            <input
              required
              type="hospital"
              name="hospital"
              className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-full outline-primary font-medium tracking-wide"
            />
          </article>
          <article>
            <label htmlFor="doctor" className="block font-OpenSans font-medium">
              Doctor:
            </label>
            <input
              required
              type="doctor"
              name="doctor"
              className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-full outline-primary font-medium tracking-wide"
            />
          </article>
          <p className=" text-gray-500 font-medium text-center">
            Note: This appointment will be send along with your profile data
            <br />{" "}
            <Link href="/" className="text-primary font-bold">
              View your Profile here
            </Link>
          </p>
          <button className="btn mt-0 w-full">Book Appointment</button>
        </form>
      </main>
    </ProfileLayout>
  );
};

export default BookAppointment;
