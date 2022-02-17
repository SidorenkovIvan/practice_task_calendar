import React, {useState} from "react";
import styles from "./CalendarItemChange.module.css";

const MONTHS = {
    0: "january",
    1: "february",
    2: "march",
    3: "april",
    4: "may",
    5: "june",
    6: "july",
    7: "august",
    8: "september",
    9: "october",
    10: "november",
    11: "december"
};

const CalendarItemChange = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(props.title.toString());
    const [enteredMembers, setEnteredMembers] = useState(props.members.toString());
    const [enteredDescription, setEnteredDescription] = useState(props.description.toString());
    const formRef = React.useRef();
    const isOverflow = useIsOverflow(formRef);

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
        deleteHandler(data);
        data.preventDefault();

        const addingEvent = {
            title: enteredTitle,
            members: enteredMembers,
            description: enteredDescription,
            key: `${props.month + 1}/${props.day}/${props.year}`,
            date: `${props.month + 1}/${props.day}/${props.year}`
        }

        props.onSaveData(addingEvent);
    }

    const deleteHandler = (data) => {
        data.preventDefault();

        const deleteEvent = {
            date: `${props.month + 1}/${props.day}/${props.year}`
        }

        props.onDeleteData(deleteEvent);
    }


    return (
        <form onSubmit={submitHandler}>
            <div id="mainForm"
                 className={`${isOverflow && styles.form2}
                  ${!isOverflow && styles.form}`}
                 ref={formRef}>
                <button className={styles['button-close']} type="button" onClick={props.onCancel}/>
                {!props.title.toString() ?
                    <input type="text" value={enteredTitle} placeholder="Title" onChange={titleChangeHandler}/>
                    : <React.Fragment>
                        <h3>{enteredTitle}</h3>
                        <p>{`${props.day} ${MONTHS[props.month]}`}</p>
                    </React.Fragment>}
                {!props.members.toString() ?
                    <input type="text" value={enteredMembers} placeholder="Members" onChange={membersChangeHandler}/>
                    : <React.Fragment>
                        <p>Members:</p>
                        <p>{enteredMembers}</p>
                    </React.Fragment>
                }
                <textarea className={styles.description} value={enteredDescription} placeholder="Description"
                          onChange={descriptionChangeHandler}/>
                <div className={styles.actions}>
                    <button type="submit">Ready</button>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </form>
    );
};

const useIsOverflow = (ref, callback) => {
    const [isOverflow, setIsOverflow] = React.useState(false);

    React.useLayoutEffect(() => {
        const {current} = ref;

        const trigger = () => {
            const hasOverflow = window.innerWidth < current.getBoundingClientRect().right;
            setIsOverflow(hasOverflow);
            if (callback) {
                callback(hasOverflow);
            }
        };

        if (current) {
            trigger();
        }
    }, [callback, ref]);

    return isOverflow;
};

export default CalendarItemChange;