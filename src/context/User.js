"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);
export const UserProfile = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [salidas, setSalidas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { GetSalidas, VerifyUser } = await import("@/lib/GetData");
      const [salidasData, userData] = await Promise.all([
        GetSalidas(),
        VerifyUser(),
      ]);
      setSalidas(salidasData);
      setUser(userData);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ salidas, user }}>
      {children}
    </UserContext.Provider>
  );
}
