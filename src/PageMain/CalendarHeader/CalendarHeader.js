import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CalendarHeader.module.css";
import SearchedEvents from "./Search/SearchedEvents";
import AddComponent from "./AddComponent";

const CalendarHeader = ({ items, onDeleteEvent, onSaveEventData }) => {
  const [enteredEvent, setEnteredEvent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  let onFilterEvents = [];

  const enteredEventHandler = (event) => setEnteredEvent(event);
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);
  const deleteEventDataHandler = (enteredEvent) => onDeleteEvent(enteredEvent);

  const saveEventDataHandler = (event) => {
    onSaveEventData(event);
    setIsEditing(false);
  };

  const redirectToProfile = () => {
    navigate("/menu/profile", { replace: true });
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
        <div className={ styles.logoutUi } onClick={ redirectToProfile }>
          <div className={ styles.buttonLogout }/>
        </div>
      </div>
      { isEditing && (
        <AddComponent
          onSaveData={ saveEventDataHandler }
          onCancel={ stopEditingHandler }
        />
      ) }
    </header>
  );
};

export default CalendarHeader;