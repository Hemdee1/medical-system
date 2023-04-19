import Link from "next/link";
import ProfileLayout from "../../components/ProfileLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useAppContext } from "../../context/context";
import downloadAsPDF from "../../utils/downloadAsPDF";

const AppointSuccess = () => {
  const route = useRouter();
  const { appointments, user } = useAppContext();
  const [appointment, setAppointment] = useState(null);
  const [type, setType] = useState("");

  useEffect(() => {
    if (!route) return;

    const id = route?.query?.id;
    const type = route?.query?.type;

    setAppointment(appointments.find((app) => app._id === id));
    setType(type);
  }, [route]);

  return (
    <ProfileLayout>
      <main className="flex flex-col items-center justify-center w-full px-5 py-10 sm:px-10">
        <div id="print" className="w-[500px] max-w-full">
          <div className="flex justify-center w-full">
            <IoMdCheckmarkCircle className="text-9xl text-primary" />
          </div>
          <h3 className="my-5 text-base font-medium text-center sm:text-xl">
            Your appointment has been {type} successfully.
          </h3>
          <div className="flex flex-col gap-4">
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                Name:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {user?.firstName} {user?.lastName}
              </h2>
            </article>
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                State:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {user?.state} State
              </h2>
            </article>
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                Address:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {user?.address}
              </h2>
            </article>
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                Title:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {appointment?.title ?? ""}
              </h2>
            </article>
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                Hospital:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {appointment?.hospital ?? ""}
              </h2>
            </article>
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                Doctor:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {appointment?.doctor ?? ""}
              </h2>
            </article>
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                Date:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {appointment?.date ?? ""}
              </h2>
            </article>
            <article className="flex items-center gap-2">
              <p className="w-20 mb-2 text-sm font-medium text-left sm:text-right sm:text-base font-OpenSans">
                Time:
              </p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px] w-[500px] max-w-full">
                {appointment?.time ?? ""}
              </h2>
            </article>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
          <Link href="/profile/appointment">
            <button className="w-full mt-0 btn">View All Appointments</button>
          </Link>
          <button className="mt-0 btn" onClick={downloadAsPDF}>
            Download Appointment Slip
          </button>
        </div>
      </main>
    </ProfileLayout>
  );
};

export default AppointSuccess;
