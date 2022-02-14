import React, {useState} from "react";
import styles from "./CalendarItem.module.css"
import CalendarItemChange from "./CalendarItemChange";

const CalendarItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveDataEditingHandler = (enteredEvent) => {
        props.onSaveEvent(enteredEvent);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

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

    return ( //Should divide by components
        <div>
            {!isEditing && (
                <div className={`${styles.item} ${title && styles['not-empty']}`}
                     onClick={startEditingHandler}>
                    <div>
                        <p className={styles['item-date']}>
                            {props.dayOfMonth ? `${props.dayOfMonth}, ` : ""}
                            {props.day}
                        </p>
                        <div className={styles['item-text']}>
                            <p>{title}</p>
                            <p>{members}</p>
                        </div>
                    </div>
                </div>
            )}
            {isEditing && (
                <div className={`${styles.item} ${title && styles['not-empty']}`}>
                    <p className={styles['item-date']}>
                        {props.dayOfMonth ? `${props.dayOfMonth}, ` : ""}
                        {props.day}
                    </p>
                    <div className={styles['item-text']}>
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
                        onCancel={stopEditingHandler}
                    />
                </div>
            )}
        </div>
    );
};

export default CalendarItem;