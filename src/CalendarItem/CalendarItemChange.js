import React, {useState, useRef} from "react";
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
    const titleRef = useRef();
    const membersRef = useRef();
    const [enteredDescription, setEnteredDescription] = useState(props.description.toString());
    const formRef = React.useRef();
    const isOverflow = useIsOverflow(formRef);

    const descriptionChangeHandler = (data) => {
        setEnteredDescription(data.target.value);
    }

    const submitHandler = (data) => {
        deleteHandler(data);
        data.preventDefault();

        const addingEvent = {
            title: titleRef.current.value,
            members: membersRef.current.value,
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
                {!props.title ?
                    <input type="text" placeholder="Title" ref={titleRef}/>
                    : <React.Fragment>
                        <h3>{props.title}</h3>
                        <p>{`${props.day} ${MONTHS[props.month]}`}</p>
                    </React.Fragment>}
                {!props.members ?
                    <input type="text" placeholder="Members" ref={membersRef}/>
                    : <React.Fragment>
                        <p>Members:</p>
                        <p>{props.members}</p>
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