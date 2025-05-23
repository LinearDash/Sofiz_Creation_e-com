import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "yourStrongPassword",
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
