import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import PageLogin from "./PageLogin/PageLogin";
import PageMain from "./PageMain/PageMain";
import PageProfile from "./PageProfile/PageProfile";
import AuthContext from "./PageLogin/Store/AuthContext";
import PageMenu from "./PageMenu/PageMenu";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <Routes>
      { authContext.isLoggedIn && (<Route path='/menu/calendar' element={ <PageMain/> }/>) }
      { !authContext.isLoggedIn && (<Route path='/auth' element={ <PageLogin/> }/>) }
      { authContext.isLoggedIn && (<Route path='/menu/profile' element={ <PageProfile/> }/>) }
      { authContext.isLoggedIn && (<Route path='/menu' element={ <PageMenu/> }/>) }
      <Route
        path="*"
        element={ <Navigate to={ authContext.isLoggedIn ? "/menu/calendar" : "/auth" }
                            replace={ true }/> }
      />
      <Route
        path="/auth"
        element={ <Navigate to={ authContext.isLoggedIn ? "/menu/calendar" : "/auth" }
                            replace={ true }/> }
      />
      <Route
        path="/menu/calendar"
        element={ <Navigate to={ authContext.isLoggedIn ? "/menu/calendar" : "/auth" }
                            replace={ true }/> }
      />
      <Route
        path="/menu/profile"
        element={ <Navigate to={ authContext.isLoggedIn ? "/menu/profile" : "/auth" }
                            replace={ true }/> }
      />
      <Route
        path="/menu"
        element={ <Navigate to={ authContext.isLoggedIn ? "/menu" : "/auth" }
                            replace={ true }/> }
      />
    </Routes>
  );
}

export default App;
