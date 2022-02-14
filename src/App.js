import React, {useState} from "react";
import styles from'./App.module.css';
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarDate from "./CalendarMain/CalendarDate";
import Calendar from "./CalendarMain/Calendar";

const INITIAL_EVENTS = [
    {
        title: "Meeting on Bolotnaya",
        date: "2/10/2022",
        members: "Volodya, Dima",
        description: ""
    },
    {
        title: "Birthday",
        date: "2/24/2022",
        members: "German, Artiom",
        description: "Drink!"
    },
    {
        title: "Drive to bar",
        date: "2/2/2022",
        members: "German, Artiom, Alexandr",
        description: ""
    }
];

function App() {
    const [events, setEvent] = useState(INITIAL_EVENTS);

    const addEventHandler = (event) => {
        setEvent((prevEvents) => {
            return [event, ...prevEvents];
        });
    }

    return (
        <div>
            <CalendarHeader/>
            <div className={styles.calendar}>
                <CalendarDate/>
                <Calendar items={events} onSaveEventData={addEventHandler}/>
            </div>
        </div>
    );
}

export default App;
