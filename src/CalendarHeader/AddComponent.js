import React, {useState} from "react";
import styles from "./AddComponent.module.css";

const AddComponent = (props) => {
    const [enteredInput, setEnteredInput] = useState("");

    const inputChangeHandler = (data) => {
        setEnteredInput(data.target.value);
    }

    const submitHandler = (data) => {
        data.preventDefault();

        const addingEvent = {
            title: enteredInput,
            members: "",
            description: "",
            key: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
            date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
        }

        props.onSaveData(addingEvent);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <button className={styles.close} onClick={props.onCancel}/>
            <input type="text" placeholder="5 march, birthday" onChange={inputChangeHandler}/>
            <button className={styles.add} type="submit">Add</button>
        </form>
    );
}

export default AddComponent;