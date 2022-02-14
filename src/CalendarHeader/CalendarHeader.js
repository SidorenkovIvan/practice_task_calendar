import React from "react";
import styles from "./CalendarHeader.module.css"

const CalendarHeader = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.actions}>
                <button className={styles['actions-buttons']}>Add</button>
                <button className={styles['actions-buttons']}>Update</button>
            </div>
            <div className={styles.search}>
                <button className={styles['search-button']}/>
                <input className={styles['search-input']} type="text" placeholder="Event, date or user"/>
            </div>
        </div>
    );
}

export default CalendarHeader;