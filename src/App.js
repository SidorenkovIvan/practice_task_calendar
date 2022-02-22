import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PageLogin from "./PageLogin/PageLogin";
import PageMain from "./PageMain/PageMain";
import PageProfile from "./PageProfile/PageProfile";
import AuthContext from "./PageLogin/Store/AuthContext";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <Routes>
      { authContext.isLoggedIn && (<Route path='/calendar' element={ <PageMain/> }/>) }
      { !authContext.isLoggedIn && (<Route path='/auth' element={ <PageLogin/> }/>) }
      { authContext.isLoggedIn && (<Route path='/profile' element={ <PageProfile/> }/>) }
      <Route path="*" element={ <Navigate to={ authContext.isLoggedIn ? "/calendar" : "/auth" }/> }/>
      <Route path="/auth" element={ <Navigate to={ authContext.isLoggedIn ? "/calendar" : "/auth" }/> }/>
      <Route path="/calendar" element={ <Navigate to={ authContext.isLoggedIn ? "/calendar" : "/auth" }/> }/>
      <Route path="/profile" element={ <Navigate to={ authContext.isLoggedIn ? "/profile" : "/auth" }/> }/>
    </Routes>
  );
}

export default App;
