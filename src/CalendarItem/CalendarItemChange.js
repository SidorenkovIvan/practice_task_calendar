import React, {useState} from "react";
import "./CalendarItemChange.css";

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

    return (
        <form onSubmit={submitHandler}>
            <div className="calendar-item-change__form">
                <button className="calendar-item-change__button__close" type="button" onClick={props.onCancel}/>
                <input className="calendar-item-change__form__inputs" type="text"
                       value={enteredTitle} placeholder="Title" onChange={titleChangeHandler}/>
                <input className="calendar-item-change__form__inputs" type="text"
                       value={enteredMembers} placeholder="Members" onChange={membersChangeHandler}/>
                <input className="calendar-item-change__form__inputs description" type="text"
                       value={enteredDescription} placeholder="Description" onChange={descriptionChangeHandler}/>
                <div className="calendar-item-change__form__actions">
                    <button className="calendar-item-change__form__actions__buttons" type="submit">Ready</button>
                    <button className="calendar-item-change__form__actions__buttons">Delete</button>
                </div>
            </div>
        </form>
    );
};

export default CalendarItemChange;