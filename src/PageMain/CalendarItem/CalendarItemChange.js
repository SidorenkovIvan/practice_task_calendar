import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./CalendarItemChange.module.css";
import variables from "../Data/Data";

const CalendarItemChange = ({ title, members, year, month, day, onSaveData, onDeleteData, onCancel, description }) => {
  const titleRef = useRef();
  const membersRef = useRef();
  const [enteredDescription, setEnteredDescription] = useState(description.toString());
  const formRef = React.useRef();
  const isOverflow = useIsOverflow(formRef);

  const descriptionChangeHandler = (data) => setEnteredDescription(data.target.value);

  const submitHandler = (data) => {
    deleteHandler(data);
    data.preventDefault();

    const addingEvent = {
      title: title ? title : titleRef.current.value,
      members: members ? members : membersRef.current.value,
      description: enteredDescription,
      key: `${ month + 1 }/${ day }/${ year }`,
      date: `${ month + 1 }/${ day }/${ year }`
    };

    onSaveData(addingEvent);
  };

  const deleteHandler = (data) => {
    data.preventDefault();

    const deleteEvent = {
      date: `${ month + 1 }/${ day }/${ year }`
    };

    onDeleteData(deleteEvent);
  };


  return (
    <form onSubmit={ submitHandler }>
      <div
        className={
          `${ isOverflow && styles.form2 }
          ${ !isOverflow && styles.form }` }
        ref={ formRef }
      >
        <button className={ styles.buttonClose } type="button" onClick={ onCancel }/>
        { title ? <>
          <h3>{ title }</h3>
          <p>{ `${ day } ${ variables.MONTHS[month] }` }</p>
        </> : <input type="text" placeholder="Title" ref={ titleRef }/> }
        { members ? <>
          <p>Members:</p>
          <p>{ members }</p>
        </> : <input type="text" placeholder="Members" ref={ membersRef }/> }
        <textarea className={ styles.description } value={ enteredDescription } placeholder="Description"
                  onChange={ descriptionChangeHandler }/>
        <div className={ styles.actions }>
          <button type="submit">Ready</button>
          <button onClick={ deleteHandler }>Delete</button>
        </div>
      </div>
    </form>
  );
};

const useIsOverflow = (ref) => {
  const [isOverflow, setIsOverflow] = React.useState(false);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = window.innerWidth < current.getBoundingClientRect().right;
      setIsOverflow(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [ref]);

  return isOverflow;
};

export default CalendarItemChange;