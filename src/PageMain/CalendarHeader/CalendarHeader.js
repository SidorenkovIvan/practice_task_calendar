import React, { useState, useContext } from "react";
import styles from "./CalendarHeader.module.css";
import SearchedEvents from "./Search/SearchedEvents";
import AddComponent from "./AddComponent";
import AuthContext from "../../PageLogin/Store/AuthContext";

const CalendarHeader = ({ items, onDeleteEvent, onSaveEventData }) => {
  const [enteredEvent, setEnteredEvent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const authContext = useContext(AuthContext);
  let onFilterEvents = [];

  const enteredEventHandler = (event) => setEnteredEvent(event);
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);
  const deleteEventDataHandler = (enteredEvent) => onDeleteEvent(enteredEvent);
  const logoutHandler = () => {
    authContext.logout();
  };

  const saveEventDataHandler = (event) => {
    onSaveEventData(event);
    setIsEditing(false);
  };

  if (enteredEvent.target) {
    onFilterEvents = items.filter((event) => event.title.includes(enteredEvent.target.value));
  }

  return (
    <header>
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
        <button onClick={ logoutHandler }>Logout</button>
      </div>
      { isEditing && (
        <AddComponent
          onSaveData={ saveEventDataHandler }
          onCancel={ stopEditingHandler }/>
      ) }
    </header>
  );
};

export default CalendarHeader;