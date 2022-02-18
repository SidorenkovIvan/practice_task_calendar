import React, {useState} from "react";
import styles from "./Event.module.css";
import CalendarItemChange from "../../CalendarItem/CalendarItemChange";
import variables from "../Data/Data";

const Event = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  const saveDataEditingHandler = (enteredEvent) => {
    props.onSaveEvent(enteredEvent);
    setIsEditing(false);
  };

  const deleteDataEditingHandler = (enteredEvent) => {
    props.onDeleteEvent(enteredEvent);
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing && (
        <li onClick={startEditingHandler}
            className={styles.element}>
          <div>
            <p className={styles.title}>{props.data.title}</p>
            <p>{`${getDay(props.data.date)} ${variables.MONTHS[getMonth(props.data.date)]}`}</p>
          </div>
        </li>
      )}
      {isEditing && (
        <li className={styles.element}>
          <div>
            <p className={styles.title}>{props.data.title}</p>
            <p>{`${getDay(props.data.date)} ${variables.MONTHS[getMonth(props.data.date)]}`}</p>
          </div>
          <CalendarItemChange
            year={getYear(props.data.date)}
            month={getMonth(props.data.date)}
            day={getDay(props.data.date)}
            title={props.data.title}
            members={props.data.members}
            description={props.data.description}
            onSaveData={saveDataEditingHandler}
            onDeleteData={deleteDataEditingHandler}
            onCancel={stopEditingHandler}
          />
        </li>
      )}
    </>
  );
};

const getDay = (date) => Number(date.split("/")[1]);
const getMonth = (date) => Number(date.split("/")[0]) - 1;
const getYear = (date) => Number(date.split("/")[2]);

export default Event;