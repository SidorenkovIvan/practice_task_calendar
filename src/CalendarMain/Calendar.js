import React, {useState} from "react";
import styles from "./Calendar.module.css";
import CalendarItem from "../CalendarItem/CalendarItem";
import variables from "../CalendarHeader/Data/Data";

const Calendar = ({ items, onDeleteEvent, onSaveEventData }) => { /* // TODO: destruction*/
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const firstDayMonth = new Date(currentYear, currentMonth, 1).getDay();
  let prevMonthDays = [];

  // TODO: why we recreate listener? maybe we could use already created from the props?
  const saveEventDataHandler = (enteredEvent) => onSaveEventData(enteredEvent);
  const deleteEventDataHandler = (enteredEvent) => onDeleteEvent(enteredEvent);

  // TODO: for future: to put counting into separate service
  if (firstDayMonth !== 1) {
    const daysInPrevMonth = daysInMonth(currentMonth - 1, currentYear);
    let mondayLastWeekOfPrevMonth = daysInPrevMonth - (new Date(currentYear, currentMonth - 1, daysInPrevMonth).getDay()) + 1;

    for (let i = mondayLastWeekOfPrevMonth; i <= daysInPrevMonth; i++) {
      prevMonthDays.push([i, currentMonth - 1]);
    }
  }

  const monthDays = [...new Array(daysInMonth(currentMonth, currentYear))].map((day, index) => [index + 1, currentMonth]);
  let calendarArray = prevMonthDays.concat(monthDays);
  const nextMonthDays = [...new Array(7 - calendarArray.length % 7)].map((day, index) => [index + 1, currentMonth + 1]);

  // // TODO: better to call listeners starting from the verb, boolean -- from the "is", "has" etc.
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
    <main className={styles.calendar}>
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
        {/* // TODO: better separate counting from drawing UI */}
        {calendarArray.concat(nextMonthDays).map((item, index) =>
          <CalendarItem
            day={item[0]}
            month={item[1]}
            year={currentYear}
            key={Math.random()}
            dayOfMonth={index < 7 ? variables.DAYS_OF_MONTH[index] : ""}
            events={items}
            onSaveEvent={saveEventDataHandler}
            onDeleteEvent={deleteEventDataHandler}
          />)}
      </div>
    </main>
  );
};

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

export default Calendar;
