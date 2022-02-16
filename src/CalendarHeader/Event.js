import styles from "./Event.module.css";

const Event = (props) => {
    const searchElementHandler = () => {
        props.onClickedEvent(props.data.date);
    }

    return (
        <li onClick={searchElementHandler}
            className={styles.element}>
            <p className={styles.title}>{props.data.title}</p>
            <p id="date">{props.data.date}</p>
        </li>
    );
}

export default Event;