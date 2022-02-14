import React from "react";
import styles from "./CalendarDate.module.css";

const CalendarDate = (props) => {
    return (
        <div className={styles.date}>
            <button></button>
            <p>Month Year</p>
            <button></button>
            <button>Today</button>
        </div>
    );
};

export default CalendarDate;