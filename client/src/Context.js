// Context.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Your login logic here
    setUser(userData);
  };

  const logout = () => {
    // Your logout logic here
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
