import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import variables from "./Data/Data";
import Calendar from "./CalendarMain/Calendar";


function PageMain({ onLogout }) {
  const [events, setEvent] = useState(variables.INITIAL_EVENTS);

  const onSaveEventData = (event) => {
    setEvent((prevEvents) => {
      return [...prevEvents, event];
    });
  };

  const onDeleteEvent = (event) => {
    setEvent((prevEvents) => {
      return prevEvents.filter((item) => item.date !== event.date);
    });
  };

  const onLogoutHandler = () => {
    console.log("Logout");
    onLogout;
  };

  return (
    <>
      <CalendarHeader
        items={ events }
        onSaveEventData={ onSaveEventData }
        onDeleteEvent={ onDeleteEvent }
        onLogoutHandler={ onLogoutHandler }/>
      <Calendar
        items={ events }
        onSaveEventData={ onSaveEventData }
        onDeleteEvent={ onDeleteEvent }/>
    </>
  );
}

export default PageMain;
