//--------------- Module 7 - Lab Work Ex4 ----------------------

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState('');
  
  const handleIsAuthenticated = (userName) => {
    if (!userName) {
      setIsAuthenticated('');
    } else {
      setIsAuthenticated(userName);
    }; 
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, handleIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

//Custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};