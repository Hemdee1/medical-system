import { createContext, useContext, useEffect, useState } from "react";
import { getLoggedInUser } from "../API Requests/user";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

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

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
