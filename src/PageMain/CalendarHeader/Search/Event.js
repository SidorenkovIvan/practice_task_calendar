import React, { useState } from "react";
import styles from "./Event.module.css";
import CalendarItemChange from "../../CalendarItem/CalendarItemChange";
import variables from "../../Data/Data";

const Event = ({ onSaveEvent, onDeleteEvent, data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  const saveDataEditingHandler = (enteredEvent) => {
    onSaveEvent(enteredEvent);
    setIsEditing(false);
  };

  const deleteDataEditingHandler = (enteredEvent) => {
    onDeleteEvent(enteredEvent);
    setIsEditing(false);
  };

  return (
    <>
      { !isEditing && (
        <li
          onClick={ startEditingHandler }
          className={ styles.element }
        >
          <div>
            <p className={ styles.title }>{ data.title }</p>
            <p>{ `${ getDay(data.date) } ${ variables.MONTHS[getMonth(data.date)] }` }</p>
          </div>
        </li>
      ) }
      { isEditing && (
        <li className={ styles.element }>
          <div>
            <p className={ styles.title }>{ data.title }</p>
            <p>{ `${ getDay(data.date) } ${ variables.MONTHS[getMonth(data.date)] }` }</p>
          </div>
          <CalendarItemChange
            year={ getYear(data.date) }
            month={ getMonth(data.date) }
            day={ getDay(data.date) }
            title={ data.title }
            members={ data.members }
            description={ data.description }
            onSaveData={ saveDataEditingHandler }
            onDeleteData={ deleteDataEditingHandler }
            onCancel={ stopEditingHandler }
          />
        </li>
      ) }
    </>
  );
};

const getDay = (date) => Number(date.split("/")[1]);
const getMonth = (date) => Number(date.split("/")[0]) - 1;
const getYear = (date) => Number(date.split("/")[2]);

export default Event;