import React, {useState} from "react";
import styles from "./Event.module.css";
import CalendarItemChange from "../../CalendarItem/CalendarItemChange";

const MONTHS = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};

const Event = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveDataEditingHandler = (enteredEvent) => {
        props.onSaveEvent(enteredEvent);
        setIsEditing(false);
    }

    const deleteDataEditingHandler = (enteredEvent) => {
        props.onDeleteEvent(enteredEvent);
        setIsEditing(false);
    }

    return (
        <React.Fragment>
            {!isEditing && (
                <li onClick={startEditingHandler}
                    className={styles.element}>
                    <div>
                        <p className={styles.title}>{props.data.title}</p>
                        <p>{`${getDay(props.data.date)} ${MONTHS[getMonth(props.data.date)]}`}</p>
                    </div>
                </li>
            )}
            {isEditing && (
                <li className={styles.element}>
                    <div>
                        <p className={styles.title}>{props.data.title}</p>
                        <p>{`${getDay(props.data.date)} ${MONTHS[getMonth(props.data.date)]}`}</p>
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
        </React.Fragment>
    );
}

const getDay = (date) => {
    return Number(date.split("/")[1]);
}

const getMonth = (date) => {
    return Number(date.split("/")[0]) - 1;
}

const getYear = (date) => {
    return Number(date.split("/")[2]);
}

export default Event;