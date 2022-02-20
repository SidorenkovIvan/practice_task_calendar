import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./CalendarItemChange.module.css";
import variables from "../Data/Data";

const CalendarItemChange = (props) => {
  const titleRef = useRef();
  const membersRef = useRef();
  const [enteredDescription, setEnteredDescription] = useState(props.description.toString());
  const formRef = React.useRef();
  const isOverflow = useIsOverflow(formRef);

  const descriptionChangeHandler = (data) => setEnteredDescription(data.target.value);

  const submitHandler = (data) => {
    deleteHandler(data);
    data.preventDefault();

    const addingEvent = {
      title: props.title ?
        props.title :
        titleRef.current.value,
      members: props.members ?
        props.members :
        membersRef.current.value,
      description: enteredDescription,
      key: `${ props.month + 1 }/${ props.day }/${ props.year }`,
      date: `${ props.month + 1 }/${ props.day }/${ props.year }`
    };

    props.onSaveData(addingEvent);
  };

  const deleteHandler = (data) => {
    data.preventDefault();

    const deleteEvent = {
      date: `${ props.month + 1 }/${ props.day }/${ props.year }`
    };

    props.onDeleteData(deleteEvent);
  };


  return (
    <form onSubmit={ submitHandler }>
      <div
        className={ `${ isOverflow && styles.form2 }
          ${ !isOverflow && styles.form }` }
        ref={ formRef }
      >
        <button className={ styles.buttonClose } type="button" onClick={ props.onCancel }/>
        { props.title ? <>
          <h3>{ props.title }</h3>
          <p>{ `${ props.day } ${ variables.MONTHS[props.month] }` }</p>
        </> : <input type="text" placeholder="Title" ref={ titleRef }/> }
        { props.members ? <>
          <p>Members:</p>
          <p>{ props.members }</p>
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

const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = React.useState(false);

  useLayoutEffect(() => {
    const { current } = ref;

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