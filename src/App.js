import React, {useState} from "react";
import './App.css';
import CalendarMain from "./CalendarMain/CalendarMain";
import CalendarHeader from "./CalendarHeader/CalendarHeader";

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
            <CalendarMain items={events} onAddEvent={addEventHandler}/>
        </div>
    );
}

export default App;
