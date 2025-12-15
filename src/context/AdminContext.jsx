import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("toy_admin_login");
    if (logged === "true") setIsAdmin(true);
  }, []);

  const login = (username, password) => {
    // simple fixed credentials for now
    if (username === "admin" && password === "1234") {
      setIsAdmin(true);
      localStorage.setItem("toy_admin_login", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("toy_admin_login");
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
