import React from "react";
import "./CalendarMain.css";
import CalendarDate from "./CalendarDate";
import Calendar from "./Calendar";

const CalendarMain = (props) => {
    const saveEventDataHandler = (enteredEvent) => {
        props.onAddEvent(enteredEvent);
    };

    return (
        <div className="calendar-main">
            <CalendarDate/>
            <Calendar items={props.items} onSaveEventData={saveEventDataHandler}/>
        </div>
    );
};

export default CalendarMain;