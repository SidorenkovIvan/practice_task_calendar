import React from "react";
import './App.css';
import CalendarMain from "./CalendarMain/CalendarMain";
import CalendarHeader from "./CalendarHeader/CalendarHeader";

function App() {
  return (
      <div>
        <CalendarHeader />
        <CalendarMain />
      </div>
  );
}

export default App;
