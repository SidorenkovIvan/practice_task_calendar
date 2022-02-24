import React, { useState } from "react";
import styles from "./CalendarItem.module.css";
import CalendarItemChange from "./CalendarItemChange";

const CalendarItem = ({ day, month, year, dayOfMonth, events, onDeleteEvent, onSaveEvent }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveData = (enteredEvent) => {
    onSaveEvent(enteredEvent);
    setIsEditing(false);
  };

  const onDeleteData = (enteredEvent) => {
    onDeleteEvent(enteredEvent);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const onCancel = () => setIsEditing(false);

  let title = "";
  let members = "";
  let description = "";
  for (let i = 0; i < events.length; i++) {
    if (events[i].date === new Date(year, month, day).toLocaleDateString()) {
      title = events[i].title;
      members = events[i].members;
      description = events[i].description;
    }
  }

  return (
    <>
      { !isEditing && (
        <div
          className={ `${ styles.item } ${ title && styles.notEmpty }` }
          onClick={ startEditingHandler }
        >
          <p className={ styles.itemDate }>
            { dayOfMonth ? `${ dayOfMonth }, ` : "" }
            { day }
          </p>
          <div className={ styles.itemText }>
            <p>{ title }</p>
            <p>{ members }</p>
          </div>
        </div>
      ) }
      { isEditing && (
        <div
          className={ `${ styles.item } 
                ${ title && styles.notEmpty } 
                ${ !title && isEditing && styles.clicked }` }
        >
          <p className={ styles.itemDate }>
            { dayOfMonth ? `${ dayOfMonth }, ` : "" }
            { day }
          </p>
          <div className={ styles.itemText }>
            <p>{ title }</p>
            <p>{ members }</p>
          </div>
          <CalendarItemChange
            year={ year }
            month={ month }
            day={ day }
            title={ title }
            members={ members }
            description={ description }
            onSaveData={ onSaveData }
            onDeleteData={ onDeleteData }
            onCancel={ onCancel }
          />
        </div>
      ) }
    </>
  );
};

export default CalendarItem;