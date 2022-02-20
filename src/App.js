import React, { useEffect, useState } from "react";
import AuthContext from "./PageMain/Data/AuthContext";
import PageLogin from "./PageLogin/PageLogin";
import PageMain from "./PageMain/PageMain";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    if (email === "test@test.com" && password === "1234567") {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={ {
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
    } }>
      { !isLoggedIn && <PageLogin onLogin={ loginHandler }/> }
      { isLoggedIn && <PageMain onLogout={ logoutHandler }/> }
    </AuthContext.Provider>
  );
}

export default App;
