import ProfileLayout from "../../components/ProfileLayout";
import AppointmentBox from "../../components/appointmentBox";
const category = ["All", "Upcoming", "Completed", "Cancel"];

const Appointment = () => {
  return (
    <ProfileLayout>
      <main className="w-full px-5">
        <div className="flex items-center justify-end gap-4 my-5">
          <label className="text-lg font-medium">Show</label>
          <select
            name="show"
            id="show"
            className="px-4 py-2 font-medium tracking-wide text-white border-2 border-gray-200 rounded-md outline-primary bg-primary"
          >
            {category.map((cate, index) => (
              <option value={cate} key={index} className="capitalize">
                {cate}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-5">
          <AppointmentBox />
          <AppointmentBox />
          <AppointmentBox />
        </div>
      </main>
    </ProfileLayout>
  );
};

export default Appointment;
