import React from "react";
import styles from "./SearchedEvents.module.css";
import Event from "./Event";

const SearchedEvents = ({ filteredEvents, onSaveEvent, onDeleteEvent}) => {
  const propsLength = filteredEvents.length;
  const onSaveDataHandler = (event) => onSaveEvent(event);
  const onDeleteDataHandler = (event) => onDeleteEvent(event);

  return (
    <ul className={ styles.list }>
      { filteredEvents && filteredEvents.map((event, index) =>
        <React.Fragment key={ Math.random() }>
          <Event
            data={ event }
            onSaveEvent={ onSaveDataHandler }
            onDeleteEvent={ onDeleteDataHandler }
          />
          { index < propsLength - 1 && <hr/> }
        </React.Fragment>
      ) }
    </ul>
  );
};

export default SearchedEvents;
