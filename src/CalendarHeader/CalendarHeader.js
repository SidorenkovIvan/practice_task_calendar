import React, {useState} from "react";
import styles from "./CalendarHeader.module.css"
import SearchedEvents from "./SearchedEvents";

const CalendarHeader = (props) => {
    const [enteredEvent, setEnteredEvent] = useState("");
    let onFilterEvents = [];

    const enteredEventHandler = (event) => {
        setEnteredEvent(event);
    };

    if (enteredEvent.target) {
        onFilterEvents = props.items.filter((event) => event.title.includes(enteredEvent.target.value));
    }

    return (
        <div className={styles.header}>
            <div className={styles.actions}>
                <button className={styles['actions-buttons']}>Add</button>
                <button className={styles['actions-buttons']}>Update</button>
            </div>
            <div className={styles.search}>
                <button className={styles['search-button']}/>
                <div>
                    <input className={styles['search-input']}
                           type="text"
                           placeholder="Event, date or user"
                           onChange={enteredEventHandler}/>
                    <SearchedEvents filteredEvents={onFilterEvents}/>
                </div>
            </div>
        </div>
    );
}

export default CalendarHeader;