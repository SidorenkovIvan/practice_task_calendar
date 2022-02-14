import React, {useState} from "react";
import styles from "./CalendarItemChange.module.css";

const CalendarItemChange = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(props.title.toString());
    const [enteredMembers, setEnteredMembers] = useState(props.members.toString());
    const [enteredDescription, setEnteredDescription] = useState(props.description.toString());

    const titleChangeHandler = (data) => {
        setEnteredTitle(data.target.value);
    }

    const membersChangeHandler = (data) => {
        setEnteredMembers(data.target.value);
    }

    const descriptionChangeHandler = (data) => {
        setEnteredDescription(data.target.value);
    }

    const submitHandler = (data) => {
        data.preventDefault();

        const addingEvent = {
            title: enteredTitle,
            members: enteredMembers,
            description: enteredDescription,
            key: Math.random(),
            date: `${props.month + 1}/${props.day}/${props.year}`
        }

        props.onSaveData(addingEvent);
    }

    return ( //Delete handlers (submit)
        <form onSubmit={submitHandler}>
            <div className={styles.form}>
                <button className={styles['button-close']} type="button" onClick={props.onCancel}/>
                <input type="text" value={enteredTitle} placeholder="Title" onChange={titleChangeHandler}/>
                <input type="text" value={enteredMembers} placeholder="Members" onChange={membersChangeHandler}/>
                <input type="text" value={enteredDescription} placeholder="Description" onChange={descriptionChangeHandler}/>
                <div className={styles.actions}>
                    <button type="submit">Ready</button>
                    <button>Delete</button>
                </div>
            </div>
        </form>
    );
};

export default CalendarItemChange;