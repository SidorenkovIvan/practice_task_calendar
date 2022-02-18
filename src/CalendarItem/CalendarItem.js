import React, {useState} from "react";
import styles from "./CalendarItem.module.css";
import CalendarItemChange from "./CalendarItemChange";

const CalendarItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataEditingHandler = (enteredEvent) => {
    props.onSaveEvent(enteredEvent);
    setIsEditing(false);
  };

  const deleteDataEditingHandler = (enteredEvent) => {
    props.onDeleteEvent(enteredEvent);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  let title = "";
  let members = "";
  let description = "";
  for (let i = 0; i < props.events.length; i++) {
    if (props.events[i].date === new Date(props.year, props.month, props.day).toLocaleDateString()) {
      title = props.events[i].title;
      members = props.events[i].members;
      description = props.events[i].description;
    }
  }

  return (
    <>
      {!isEditing && (
        <div className={`${styles.item} ${title && styles.notEmpty}`}
             onClick={startEditingHandler}>
          <p className={styles.itemDate}>
            {props.dayOfMonth ? `${props.dayOfMonth}, ` : ""}
            {props.day}
          </p>
          <div className={styles.itemText}>
            <p>{title}</p>
            <p>{members}</p>
          </div>
        </div>
      )}
      {isEditing && (
        <div className={`${styles.item} 
                ${title && styles.notEmpty} 
                ${!title && isEditing && styles.clicked}`}>
          <p className={styles.itemDate}>
            {props.dayOfMonth ? `${props.dayOfMonth}, ` : ""}
            {props.day}
          </p>
          <div className={styles.itemText}>
            <p>{title}</p>
            <p>{members}</p>
          </div>
          <CalendarItemChange
            year={props.year}
            month={props.month}
            day={props.day}
            title={title}
            members={members}
            description={description}
            onSaveData={saveDataEditingHandler}
            onDeleteData={deleteDataEditingHandler}
            onCancel={stopEditingHandler}
          />
        </div>
      )}
    </>
  );
};

export default CalendarItem;