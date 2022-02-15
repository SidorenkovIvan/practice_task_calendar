import React from "react";
import styles from './SearchedEvents.module.css';

const SearchedEvents = (props) => {
    return (
        <ul className={styles.list}>
            {props.filteredEvents && props.filteredEvents.map((event) =>
                <li className={styles.element} key={Math.random()}>
                    <p className={styles.title}>{event.title}</p>
                    <p>{event.date}</p>
                </li>
            )}
        </ul>
    );
};

export default SearchedEvents;
