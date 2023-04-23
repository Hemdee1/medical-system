import Image from "next/image";
import { ImCalendar, ImEyePlus, ImBook } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineRight, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { useAppContext } from "../context/context";
import { Logout } from "../API Requests/user";
import getPathTitle from "../utils/getPathTitle";

const ProfileLayout = ({ children }) => {
  const route = useRouter();
  const [title, setTitle] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user, setUser } = useAppContext();

  useEffect(() => {
    const path = route.pathname;

    const title = getPathTitle(path);
    setTitle(title);
  }, [route]);

  useEffect(() => {
    if (user === null) {
      route.replace("/login");
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await Logout();

      setUser(null);
      route.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (user === undefined) {
    return (
      <main className="flex items-center justify-center w-full h-screen">
        <span className="loader"></span>
      </main>
    );
  }

  return (
    <main className="fixed top-0 left-0 flex w-full h-screen">
      <aside
        className={`min-w-[250px] h-full shadow-gray-200 shadow-md bg-white py-4 transition-all duration-300 absolute top-0 lg:relative lg:left-0 z-20 ${
          openSidebar ? "left-0" : "-left-full"
        }`}
      >
        <Link href="/">
          <Image
            src="/image/Logo.png"
            alt="Company's Logo"
            width={100}
            height={60}
            className="mx-5"
          />
        </Link>
        <div className="flex flex-col items-center w-full mb-5">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden mt-[20px] grid place-items-center">
            {user?.img ? (
              <img
                src={user?.img}
                alt="User's Image"
                className="object-cover w-full h-full"
              />
            ) : (
              <FaUser className="text-6xl" />
            )}
          </div>
          <h3 className="mt-3 capitalize lg:text-xl font-OpenSans">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="opacity-60">Patient</p>
        </div>
        <div>
          <ul className="px-2">
            <Link
              href="/profile/dashboard"
              className={
                title === "Dashboard"
                  ? "active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl"
                  : "flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl"
              }
            >
              <MdSpaceDashboard />
              <p className="ml-2 ">Dashboard</p>
            </Link>

            <Link
              href="/profile"
              className={
                title === ""
                  ? "active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl"
                  : "flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl"
              }
            >
              <AiOutlineUser />
              <p className="ml-2 ">Profile</p>
            </Link>

            <Link
              href="/profile/appointment"
              className={
                title === "Appointments"
                  ? "active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl"
                  : "flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl"
              }
            >
              <ImCalendar />
              <p className="ml-2"> Appointments</p>
            </Link>
            <Link
              href="/profile/bookappointment"
              className={
                title === "Book Appointments"
                  ? "active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl"
                  : "flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl"
              }
            >
              <ImEyePlus />
              <p className="ml-2"> Book Appointment</p>
            </Link>
            <Link
              href="/profile/record"
              className={
                title === "Medical Records"
                  ? "active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl"
                  : "flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl"
              }
            >
              <ImBook />
              <p className="ml-2"> Medical Records</p>
            </Link>
            <button
              onClick={handleLogout}
              className="text-black flex justify-center items-center my-3 px-3 py-[10px] rounded-md absolute bottom-0 left-2 text-lg lg:text-xl font-semibold bg-red-300 w-[93%]"
            >
              Logout
            </button>
          </ul>
        </div>
      </aside>
      <section className="relative w-full h-screen">
        <div className="w-full absolute top-0 left-0 text-lg lg:text-xl flex items-center h-[70px]  px-4">
          <h3 className="font-bold">Profile</h3>
          <AiOutlineRight className="mx-3" />

          <h3>{title}</h3>
          <button className="ml-auto lg:hidden">
            <Hamburger
              toggle={setOpenSidebar}
              toggled={openSidebar}
              size={25}
            />
          </button>
        </div>
        <section className="bg-white sm:p-4 w-full pb-20 h-[calc(100vh-150px)] overflow-y-scroll scrollbar-thumb-gray-300 scrollbar mt-[70px]">
          {children}
        </section>
      </section>
    </main>
  );
};

export default ProfileLayout;
