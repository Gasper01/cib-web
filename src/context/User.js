"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);
export const UserProfile = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [salidas, setSalidas] = useState([]);
  const [salidasChange, setSalidasChange] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { VerifyUser } = await import("@/lib/GetData");
      const [userData] = await Promise.all([VerifyUser()]);
      setUser(userData);
      setSalidasChange(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (salidasChange) {
      const fetchData = async () => {
        const { GetSalidas } = await import("@/lib/GetData");
        const [salidasData] = await Promise.all([GetSalidas()]);
        setSalidas(salidasData);
        setSalidasChange(false);
      };
      fetchData();
    }
  }, [salidasChange]);

  return (
    <UserContext.Provider value={{ salidas, user, setSalidasChange }}>
      {children}
    </UserContext.Provider>
  );
}
