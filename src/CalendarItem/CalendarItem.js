import React, {useState} from "react";
import "./CalendarItem.css"
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

    return ( //Should divide bu components
        <div className="calendar-item" style={title ? {
            backgroundColor: "cornflowerblue",
            border: "1px solid blue"
        } : {backgroundColor: "white"}}>
            {
                !isEditing && (
                <div onClick={startEditingHandler}>
                    <p className="calendar-item__date">
                        {props.dayOfMonth ? `${props.dayOfMonth}, ` : ""}
                        {props.day}
                    </p>
                    <div className="calendar-item__text">
                        <p>{title}</p>
                        <p>{members}</p>
                    </div>
                </div>
            )}
            {
                isEditing && (
                <div>
                    <p className="calendar-item__date">
                        {props.dayOfMonth ? `${props.dayOfMonth}, ` : ""}
                        {props.day}
                    </p>
                    <div className="calendar-item__text">
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