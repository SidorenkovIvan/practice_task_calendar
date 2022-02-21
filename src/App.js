import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLogin from "./PageLogin/PageLogin";
import PageMain from "./PageMain/PageMain";
import PageProfile from "./PageProfile/PageProfile";

function App() {
  return (
    <Routes>
      <Route path='/' element={ <PageMain/> } exact/>
      <Route path='/auth' element={ <PageLogin/> }/>
      <Route path='/profile' element={ <PageProfile/> }/>
    </Routes>
  );
}

export default App;
