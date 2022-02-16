import React, {useState} from "react";
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

const MONTHS = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};

const Calendar = (props) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const firstDayMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastMonthDays = [];

    const saveEventDataHandler = (enteredEvent) => {
        props.onSaveEventData(enteredEvent);
    };

    const deleteEventDataHandler = (enteredEvent) => {
        props.onDeleteEvent(enteredEvent);
    };

    if (firstDayMonth !== 1) {
        const daysInLastMonth = daysInMonth(currentMonth - 1, currentYear);
        let mondayLastWeekOfLastMonth = daysInLastMonth - (new Date(currentYear, currentMonth - 1, daysInLastMonth).getDay()) + 1;

        for (let i = mondayLastWeekOfLastMonth; i <= daysInLastMonth; i++) {
            lastMonthDays.push([i, currentMonth - 1]);
        }
    }

    const monthDays = [...new Array(daysInMonth(currentMonth, currentYear))].map((day, index) => [index + 1, currentMonth]);
    let calendarArray = lastMonthDays.concat(monthDays);
    const nextMonthDays = [...new Array(7 - calendarArray.length % 7)].map((day, index) => [index + 1, currentMonth + 1]);

    const previousMonth = () => {
        let month = currentMonth - 1;

        if (month < 0) {
            month = 11;
            let year = currentYear - 1;
            setCurrentYear(year);
        }

        setCurrentMonth(month);
    }

    const nextMonth = () => {
        let month = currentMonth + 1;

        if (month > 11) {
            month = 0;
            let year = currentYear + 1;
            setCurrentYear(year);
        }

        setCurrentMonth(month);
    }

    const currentDate = () => {
        setCurrentMonth(new Date().getMonth());
        setCurrentYear(new Date().getFullYear());
    }

    return (
        <React.Fragment>
            <div className={styles.date}>
                <button className={styles.prev} onClick={previousMonth}/>
                <p>{`${MONTHS[currentMonth]} ${currentYear}`}</p>
                <button className={styles.next} onClick={nextMonth}/>
                <button className={styles.today} onClick={currentDate}>Today</button>
            </div>
            <div className={styles.grid}>
                {calendarArray.concat(nextMonthDays).map((item, index) =>
                    <CalendarItem
                        day={item[0]}
                        month={item[1]}
                        year={currentYear}
                        key={Math.random()}
                        dayOfMonth={index < 7 ? DAYS_OF_MONTH[index] : ""}
                        events={props.items}
                        onSaveEvent={saveEventDataHandler}
                        onDeleteEvent={deleteEventDataHandler}
                        searchResult={props.searchedItem}
                    />)}
            </div>
        </React.Fragment>
    )
};

const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
}

// const getMonth = (date) => {
//     return Number(date.split("/")[0]);
// }
//
// const getYear = (date) => {
//     return Number(date.split("/")[2]);
// }

export default Calendar;