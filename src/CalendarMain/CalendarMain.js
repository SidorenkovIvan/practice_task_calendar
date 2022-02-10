import React from "react";
import "./CalendarMain.css";
import CalendarDate from "./CalendarDate";
import Calendar from "./Calendar";

const CalendarMain = (props) => {
    return (
        <div className="calendar-main">
            <CalendarDate/>
            <Calendar/>
        </div>
    );
};

export default CalendarMain;