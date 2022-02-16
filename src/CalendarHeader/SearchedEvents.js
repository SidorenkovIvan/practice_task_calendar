import React from "react";
import styles from './SearchedEvents.module.css';
import Event from "./Event";

const SearchedEvents = (props) => {
    const setSearchedEventHandler = (date) => {
        props.clickedItem(date);
    }

    return (
        <ul className={styles.list}>
            {props.filteredEvents && props.filteredEvents.map((event) =>
                <Event
                    onClickedEvent={setSearchedEventHandler}
                    data={event}
                    key={Math.random()}
                />
            )}
        </ul>
    );
};

export default SearchedEvents;
