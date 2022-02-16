import React, {useState} from "react";
import styles from "./CalendarHeader.module.css"
import SearchedEvents from "./SearchedEvents";
import AddComponent from "./AddComponent";

const CalendarHeader = (props) => {
    const [enteredEvent, setEnteredEvent] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    let onFilterEvents = [];

    const enteredEventHandler = (event) => {
        setEnteredEvent(event);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveEventDataHandler = (event) => {
        props.onSaveEventData(event);
        setIsEditing(false);
    }

    const getSearchedEventHandler = (event) => {
        props.searchedHandler(event);
    }

    if (enteredEvent.target) {
        onFilterEvents = props.items.filter((event) => event.title.includes(enteredEvent.target.value));
    }

    return (
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.actions}>
                    <button className={styles['actions-buttons']} onClick={startEditingHandler}>Add</button>
                    <button className={styles['actions-buttons']}>Update</button>
                </div>
                <div className={styles.search}>
                    <button className={styles['search-button']}/>
                    <div>
                        <input className={styles['search-input']}
                               type="text"
                               placeholder="Event, date or user"
                               onChange={enteredEventHandler}/>
                        <SearchedEvents
                            filteredEvents={onFilterEvents}
                            clickedItem={getSearchedEventHandler}/>
                    </div>
                </div>
            </div>
            {isEditing && (
                <AddComponent
                    onSaveData={saveEventDataHandler}
                    onCancel={stopEditingHandler}/>
            )}
        </React.Fragment>
    );
}

export default CalendarHeader;