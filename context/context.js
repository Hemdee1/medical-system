import { createContext, useContext, useEffect, useState } from "react";
import { getLoggedInUser } from "../API Requests/user";
import { GetAllApointments } from "../API Requests/appointment";
import validateAppointments from "../utils/validateAppointments";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const data = await getLoggedInUser();

        setUser(data);
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    };

    autoLogin();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointments = await GetAllApointments();

        // validate the status of the appointment
        const validatedAppointments = validateAppointments(appointments);
        setAppointments(validatedAppointments);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchAppointments();
    } else {
      setAppointments([]);
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{ user, setUser, appointments, setAppointments }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
