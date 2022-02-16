import React, {useState} from "react";
import styles from './App.module.css';
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import Calendar from "./CalendarMain/Calendar";

const INITIAL_EVENTS = [
    {
        title: "Meeting on Bolotnaya",
        date: "2/10/2022",
        members: "Volodya, Dima",
        description: "",
        key: "2/10/2022"
    },
    {
        title: "Birthday",
        date: "2/24/2022",
        members: "German, Artiom",
        description: "Drink!",
        key: "2/24/2022"
    },
    {
        title: "Work",
        date: "2/2/2022",
        members: "German, Artiom, Alexandr",
        description: "",
        key: "2/2/2022"
    },
    {
        title: "Work",
        date: "1/1/2022",
        members: "German, Artiom",
        description: "",
        key: "1/1/2022"
    },
    {
        title: "Work",
        date: "3/4/2022",
        members: "German",
        description: "",
        key: "3/4/2022"
    }
];

function App() {
    const [events, setEvent] = useState(INITIAL_EVENTS);
    const [searchedDate, setSearchedDate] = useState("");

    const addEventHandler = (event) => {
        setEvent((prevEvents) => {
            return [event, ...prevEvents];
        });
    }

    const deleteEventHandler = (event) => {
        setEvent((prevEvents) => {
            return prevEvents.filter((item) => item.date !== event.date);
        });
    }

    const searchedDateHandler = (date) => {
        setSearchedDate(date);
    }

    return (
        <React.Fragment>
            <CalendarHeader
                items={events}
                onSaveEventData={addEventHandler}
                searchedHandler={searchedDateHandler}/>
            <div className={styles.calendar}>
                <Calendar
                    items={events}
                    searchedItem={searchedDate}
                    onSaveEventData={addEventHandler}
                    onDeleteEvent={deleteEventHandler}/>
            </div>
        </React.Fragment>
    );
}

export default App;
