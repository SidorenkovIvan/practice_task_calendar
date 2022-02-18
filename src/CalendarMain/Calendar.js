import React, {useState} from "react";
import styles from "./Calendar.module.css";
import CalendarItem from "../CalendarItem/CalendarItem";
import variables from "../CalendarHeader/Data/Data";

const Calendar = (props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const firstDayMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastMonthDays = [];

  const saveEventDataHandler = (enteredEvent) => props.onSaveEventData(enteredEvent);
  const deleteEventDataHandler = (enteredEvent) => props.onDeleteEvent(enteredEvent);

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
  };

  const nextMonth = () => {
    let month = currentMonth + 1;

    if (month > 11) {
      month = 0;
      let year = currentYear + 1;
      setCurrentYear(year);
    }

    setCurrentMonth(month);
  };

  const currentDate = () => {
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  };

  return (
    <>
      <div className={styles.date}>
        <div className={styles.background} onClick={previousMonth}>
          <div className={styles.prev}/>
        </div>
        <p>{`${variables.MONTHS[currentMonth]} ${currentYear}`}</p>
        <div className={styles.background} onClick={nextMonth}>
          <div className={styles.next}/>
        </div>
        <button className={styles.today} onClick={currentDate}>Today</button>
      </div>
      <div className={styles.grid}>
        {calendarArray.concat(nextMonthDays).map((item, index) =>
          <CalendarItem
            day={item[0]}
            month={item[1]}
            year={currentYear}
            key={Math.random()}
            dayOfMonth={index < 7 ? variables.DAYS_OF_MONTH[index] : ""}
            events={props.items}
            onSaveEvent={saveEventDataHandler}
            onDeleteEvent={deleteEventDataHandler}
          />)}
      </div>
    </>
  );
};

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

export default Calendar;