import React, {useState} from "react";
import styles from "./App.module.css";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import Calendar from "./CalendarMain/Calendar";
import variables from "./CalendarHeader/Data/Data";

function App() {
  const [events, setEvent] = useState(variables.INITIAL_EVENTS);

  const addEventHandler = (event) => {
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
    <>
      <footer>
        <CalendarHeader
          items={events}
          onSaveEventData={addEventHandler}
          onDeleteEvent={deleteEventHandler}/>
      </footer>
      <main>
        <div className={styles.calendar}>
          <Calendar
            items={events}
            onSaveEventData={addEventHandler}
            onDeleteEvent={deleteEventHandler}/>
        </div>
      </main>
    </>
  );
}

export default App;
