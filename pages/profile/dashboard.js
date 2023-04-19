import ProfileLayout from "../../components/ProfileLayout";
import Medhistory from "../../components/Medhistory";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const dates = ["2023/04/17", "2023/04/21", "2023/04/25"];
console.log(new Date(dates[0]));

const Dashboard = () => {
  const [selectDate, setSelectDate] = useState();

  return (
    <ProfileLayout>
      <main className="w-full  bg-white">
        <div className="rounded-2xl px-6 py-6 bg-gradient-to-r from-blue-50 to-red-50 shadow-md shadow-gray-400">
          <h3 className="font-semibold text-lg sm:text-2xl">
            Upcoming Announcements
          </h3>
          <div className="flex justify-between items-start gap-10 flex-col lg:flex-row mt-10">
            <div className="flex flex-col w-full lg:w-1/2">
              <h2 className="text-primary font-Caudex font-bold text-3xl sm:text-5xl">
                Your next visit is arriving soon
              </h2>
              <p className="font-semibold text-lg sm:text-2xl text-gray-600 mt-10">
                April 16, 2023 Saturday
              </p>
              <p className="font-semibold text-lg sm:text-2xl text-gray-600 mt-5">
                {" "}
                Dr. Agu Jonas
              </p>
              <div className="mt-3">
                <button className="btn w-[150px] mt-5 sm:mt-10 sm:w-[200px]">
                  Reschedule
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              {/* Date calendar here */}
              <Calendar
                onClickDay={(val) => setSelectDate(val)}
                tileClassName={({ date }) => {
                  // dates.forEach((d) => {
                  //   const selectDate = new Date(d);

                  //   if (date.getTime() === selectDate.getTime())
                  //     return "hightlight";
                  // });

                  if (date.getTime() === new Date(dates[0]).getTime())
                    return "highlight";
                  if (date.getTime() === new Date(dates[1]).getTime())
                    return "highlight";
                }}
              />
              <div className="mt-5 text-center font-semibold text-gray-700">
                <span>Today:</span>
                <span className="ml-3 text-lg">No Event</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="w-full  bg-white rounded-lg mt-4 px-3 sm:px-6 py-6">
        <h3 className="font-medium text-lg sm:text-xl">Medical Records</h3>
        <div className="pl-3 sm:pl-5">
          <Medhistory type={"Consultation"} />
        </div>
      </main>
    </ProfileLayout>
  );
};

export default Dashboard;
