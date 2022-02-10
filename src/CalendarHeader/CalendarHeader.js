import React from "react";
import "./CalendarHeader.css"

const CalendarHeader = (props) => {
    return (
        <div className="calendar-header">
            <div className="calendar-header__actions">
                <button className="calendar-header__actions__buttons">Add</button>
                <button className="calendar-header__actions__buttons">Update</button>
            </div>
            <div className="calendar-header__search">
                <button className="calendar-header__search__button"></button>
                <input className="calendar-header__search__input" type="text" placeholder="Event, date or user"/>
            </div>
        </div>
    );
}

export default CalendarHeader;