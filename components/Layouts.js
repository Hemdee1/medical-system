import React, { useReducer } from 'react'
import logo from "../Assets/images/logo.png"
import user from "../Assets/images/user.png"
import Image from "next/image"
import { ImCalendar, ImEyePlus, ImBook } from "react-icons/im"
import { MdSpaceDashboard } from "react-icons/md"
import { AiOutlineRight } from "react-icons/ai"
import Link from "next/link"
import { useRouter } from "next/router"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Appointment from '../pages/appointment'
import BookAppointment from '../pages/bookappointment'

function Layouts({ children }) {

 const route = useRouter();
  let title = " "

  if (route.pathname === "/profile") {
    title = "Dashboard";
  } else if (route.pathname === "/appointment") {
    title = "Appoinments"
  } else if (route.pathname === "/bookappointment") {
    title = "Book Appoinments"
  }
  console.log(route.pathname);
  const initState = <Appointment />

  const reducer = (state, action) => {
    switch (action.type) {
      case 'Appointment':
        return <Appointment />
      case 'BookApp':
        return <BookAppointment />

      default:
        throw new Error
    }

  }

  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <main className="w-full h-screen flex relative">
      <aside className="w-1/4 h-full  py-4">
        <div className="flex flex-col  items-center w-full">
          <Image src={logo} alt="Company's Logo" width={100} height={60} />
          <div className={'w-[100px] h-[100px] rounded-full overflow-hidden mt-[50px]'}>
            <Image src={user} alt="User's Image" />
          </div>
          <h3 className="lg:text-xl mt-3 font-OpenSans  ">Agu Jonas</h3>
          <p className="opacity-60">Patient</p>
        </div>
        <div>
          <ul className="px-2">
            <li className={route.pathname === "/profile" ? 'active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl' : 'flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl'}>
              <MdSpaceDashboard />
              <Link href="/profile"><p className="ml-2 ">Dashboard</p></Link>
            </li>
            <li onClick={() => dispatch({ type: 'Appointment' })} className={route.pathname === "/appointment" ? 'active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl' : 'flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl'}>
              <ImCalendar />
              <Link href="appointment"> <p className="ml-2"> Appointment</p></Link>
            </li>
            <li className={route.pathname === "/bookappointment" ? 'active text-secondary flex  items-center my-3 px-3 py-[10px] rounded-md  text-lg lg:text-xl' : 'flex  items-center my-3 px-3 py-[10px] rounded-md text-lg lg:text-xl'}>
              <ImEyePlus />
              <Link href="/bookappointment"><p className="ml-2"> Book Appointment</p></Link>
            </li>
            <li className="flex items-center my-3 px-3 py-2 rounded-md text-lg lg:text-xl">
              <ImBook />
              <p className="ml-2"> Medical Records</p>
            </li>
          </ul>
        </div>

      </aside>
      <section className="w-3/4 h-screen relative">
        <div className="w-full absolute top-0 left-0  text-lg lg:text-xl flex items-center h-[70px]  px-4">
          <h3 className="font-bold">Profile</h3>
          <AiOutlineRight className="mx-3" />

          <h3>{title}</h3>
        </div>
        <section className="bg-dashboardGray p-4 w-full custom-dashboard-height overflow-scroll mt-[70px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>

            {children}
          </LocalizationProvider>
        </section>
      </section>
    </main>
  )
}

export default Layouts
