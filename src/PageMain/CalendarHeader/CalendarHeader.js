import React, { useState } from "react";
import styles from "./CalendarHeader.module.css";
import SearchedEvents from "./Search/SearchedEvents";
import AddComponent from "./AddComponent";

const CalendarHeader = (props) => {
  const [enteredEvent, setEnteredEvent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  let onFilterEvents = [];

  const enteredEventHandler = (event) => setEnteredEvent(event);
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);
  const deleteEventDataHandler = (enteredEvent) => props.onDeleteEvent(enteredEvent);

  const saveEventDataHandler = (event) => {
    props.onSaveEventData(event);
    setIsEditing(false);
  };

  if (enteredEvent.target) {
    onFilterEvents = props.items.filter((event) => event.title.includes(enteredEvent.target.value));
  }

  return (
    <>
      <div className={ styles.header }>
        <div className={ styles.actions }>
          <button className={ styles.actionsButtons } onClick={ startEditingHandler }>Add</button>
          <button className={ styles.actionsButtons }>Update</button>
        </div>
        <div className={ styles.search }>
          <button className={ styles.searchButton }/>
          <div>
            <input className={ styles.searchInput }
                   type="text"
                   placeholder="Event, date or user"
                   onChange={ enteredEventHandler }
            />
            <SearchedEvents
              filteredEvents={ onFilterEvents }
              onSaveEvent={ saveEventDataHandler }
              onDeleteEvent={ deleteEventDataHandler }
            />
          </div>
        </div>
      </div>
      { isEditing && (
        <AddComponent
          onSaveData={ saveEventDataHandler }
          onCancel={ stopEditingHandler }/>
      ) }
    </>
  );
};

export default CalendarHeader;