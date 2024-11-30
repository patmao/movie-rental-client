import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize state with default values
  const [user, setUser] = useState({
    email: '',
    isAdmin: false,
    rentals: []
  });

  useEffect(() => {
    // If there's a user in localStorage, set it to the state
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    console.log("Setting user in AuthContext:", userData); // Debugging
    localStorage.setItem("user", JSON.stringify(userData)); // Save user to localStorage
    setUser(userData); // Set user in state
  };

  const logout = () => {
    console.log("Logging out..."); // Log to confirm logout
    localStorage.removeItem("user");
    setUser({ email: '', isAdmin: false, rentals: [] }); // Reset state on logout
    
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
