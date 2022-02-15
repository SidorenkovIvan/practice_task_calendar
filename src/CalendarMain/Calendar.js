import React from "react";
import styles from "./Calendar.module.css"
import CalendarItem from "../CalendarItem/CalendarItem";

const DAYS_OF_MONTH = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
};

const Calendar = (props) => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const firstDayMonth = new Date(year, month, 1).getDay();
    let lastMonthDays = [];

    const saveEventDataHandler = (enteredEvent) => {
        props.onSaveEventData(enteredEvent);
    };

    const deleteEventDataHandler = (enteredEvent) => {
        props.onDeleteEvent(enteredEvent);
    };

    if (firstDayMonth !== 1) {
        const daysInLastMonth = daysInMonth(month - 1, year);
        let mondayLastWeekOfLastMonth = daysInLastMonth - (new Date(year, month - 1, daysInLastMonth).getDay()) + 1;

        for (let i = mondayLastWeekOfLastMonth; i <= daysInLastMonth; i++) {
            lastMonthDays.push(i);
        }
    }

    const monthDays = [...new Array(daysInMonth(month, year))].map((day, index) => index + 1);
    let calendarArray = lastMonthDays.concat(monthDays);
    const nextMonthDays = [...new Array(7 - calendarArray.length % 7)].map((day, index) => index + 1);

    return (
        <React.Fragment>
            <div className={styles.date}>
                <button/>
                <p>Month Year</p>
                <button/>
                <button>Today</button>
            </div>
            <div className={styles.grid}>
                {calendarArray.concat(nextMonthDays).map((item, index) =>
                    <CalendarItem
                        day={item}
                        month={month}
                        year={year}
                        key={Math.random()}
                        dayOfMonth={index < 7 ? DAYS_OF_MONTH[index] : ""}
                        events={props.items}
                        onSaveEvent={saveEventDataHandler}
                        onDeleteEvent={deleteEventDataHandler}
                    />)}
            </div>
        </React.Fragment>
    )
};

const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
}

export default Calendar;