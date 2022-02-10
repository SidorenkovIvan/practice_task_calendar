import React, {useState} from "react";
import "./CalendarItemChange.css";

const CalendarItemChange = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(props.title);
    const [enteredMembers, setEnteredMembers] = useState(props.members);
    const [enteredDescription, setEnteredDescription] = useState(props.description);

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
        const addingEvent = {
            title: enteredTitle,
            members: enteredMembers,
            description: enteredDescription
        }

        props.onSaveData(addingEvent);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <button type="submit">Add</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default CalendarItemChange;