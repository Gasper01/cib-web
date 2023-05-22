'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import verifyUser from '../lib/verifyUser';
export const UserContext = createContext(null);

export const UserProfile = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const token = Cookies.get('token');

  useEffect(() => {
    async function getUser() {
      const userdata = await verifyUser(token);
      setUser(userdata);
    }
    if (token) {
      getUser();
    } else {
      setUser(null);
    }
  }, [token]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
