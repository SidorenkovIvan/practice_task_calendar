import React, {useState} from "react";
import "./Calendar.css"
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

const EVENTS = [
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
]

const Calendar = (props) => {
    const [events, setEvent] = useState(EVENTS);
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const firstDayMonth = new Date(year, month, 1).getDay();
    let lastMonthDays = [];

    const onAddEventHandler = (event) => {
        setEvent((prevEvents) => {
            return [event, ...prevEvents];
        })
    }

    if (firstDayMonth !== 1) {
        const daysInLastMonth = daysInMonth(month - 1, year);
        let mondayLastWeekOfLastMonth = daysInLastMonth - (new Date(year, month - 1, daysInLastMonth).getDay());

        for (let i = mondayLastWeekOfLastMonth; i <= daysInLastMonth; i++) {
            lastMonthDays.push(i);
        }
    }

    const monthDays = [...new Array(daysInMonth(month, year))].map((day, index) => index + 1);
    let calendarArray = lastMonthDays.concat(monthDays);
    const nextMonthDays = [...new Array(7 - calendarArray.length % 7)].map((day, index) => index + 1);

    return (
        <div className="calendar-grid">
            {calendarArray.concat(nextMonthDays).map((item, index) => <CalendarItem
                day={item}
                month={month}
                year={year}
                key={Math.random()}
                dayOfMonth={index < 7 ? DAYS_OF_MONTH[index] : ""}
                events={EVENTS}
                onAddEvent={onAddEventHandler}
            />)}
        </div>
    )
};

function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

export default Calendar;