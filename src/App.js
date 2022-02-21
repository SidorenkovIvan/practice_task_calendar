import React, { useEffect, useState } from "react";
import PageLogin from "./PageLogin/PageLogin";
import PageMain from "./PageMain/PageMain";
import { Route, Routes, Navigate } from "react-router-dom";
import PageProfile from "./PageProfile/PageProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (email, password) => {
    if (email === "test@test.com" && password === "1234567") {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    }
  };

  const onLogout = () => {
    console.log("Logout");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login"/> }/>
      <Route path="/login" element={
        (isLoggedIn && <Navigate to="/calendar"/>) ||
        (!isLoggedIn && <PageLogin onLogin={ onLogin }/>)
      }/>
      <Route path="/calendar" element={
        (isLoggedIn && <PageMain onLogout={ onLogout }/>) ||
        (!isLoggedIn && <Navigate to="/login"/>)
      }/>
      <Route path="/profile" element={ <PageProfile/> }/>
    </Routes>
  );
}

export default App;
