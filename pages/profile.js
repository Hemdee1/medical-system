import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layouts from "../components/Layouts";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { Button } from "@mui/material";
import Medhistory from "../components/Medhistory";
const Profile = () => {

  return (
   
    <Layouts>
      <main className="w-full  bg-white">
            <div className="rounded-lg px-6 py-6  activedash ">
              <h3 className="font-normal text-lg md:text-xl">Upcoming Announcements</h3>
              <div className="flex justify-between items-start mt-10">
                <div className=" relative  h-[300px] flex flex-col w-[250px]">
                 <h2 className="text-primary font-Caudex text-xl lg:text-3xl">Your Next Visit is arriving soon</h2>
                 <p className="my-12 opacity-60">April 16, 2023 Saturday</p>
                 <p className="opacity-60"> Dr. Agu Jonas</p>
                 <div className="mt-12 absolute bottom-0">

                 <Button style={{backgroundColor:"#4FB783"}} variant="contained">Reschedule</Button>
                 </div>
                </div>
              <div className="w-[340px] bg-white rounded-lg p-1 border-2 border-primary">
           
 
                <DateCalendar style={{width:"100%", height:"300px"}}  defaultValue={dayjs('2022-04-18')} disabled />
              
              </div>
              </div>
            </div>
            
        </main>
        <main className="w-full  bg-white rounded-lg mt-4 px-6 py-6">
         
        <h3 className="font-normal text-lg md:text-xl">Medical Records</h3>
        <div className="pl-5">
          <Medhistory type={"Consultation"}/>
        </div>
        </main>
    </Layouts>

  );
};

export default Profile;
