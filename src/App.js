import React, { useState } from "react"; // TODO: look at my project we use 1coma and spaces destruction(for all cases in the app)
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import Calendar from "./CalendarMain/Calendar";
import variables from "./CalendarHeader/Data/Data";

function App() {
  const [events, setEvent] = useState(variables.INITIAL_EVENTS);

  const addEventHandler = (event) => { // TODO: this name of func confuses. we don't add any listener here,
    // just push object into arr. and better use the same name which is sent as a prop (onSaveEventData)
    setEvent((prevEvents) => {
      return [...prevEvents, event];
    });
  };

  const deleteEventHandler = (event) => {
    setEvent((prevEvents) => {
      return prevEvents.filter((item) => item.date !== event.date);
    });
  };

  return (
      /* what was the result of googling for using short Fragment or not??? */
    <>
      <footer> {/* // TODO: not sure about footer in the top */}
        <CalendarHeader
          items={events}
          onSaveEventData={addEventHandler}
          onDeleteEvent={deleteEventHandler}/>
      </footer>
      <Calendar
        items={events}
        onSaveEventData={addEventHandler}
        onDeleteEvent={deleteEventHandler}/>
    </>
  );
}

export default App;
