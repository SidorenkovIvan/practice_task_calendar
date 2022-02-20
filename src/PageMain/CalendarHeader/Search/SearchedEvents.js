import React from "react";
import styles from "./SearchedEvents.module.css";
import Event from "./Event";

const SearchedEvents = (props) => {
  const propsLength = props.filteredEvents.length;
  const onSaveDataHandler = (event) => props.onSaveEvent(event);
  const onDeleteDataHandler = (event) => props.onDeleteEvent(event);

  return (
    <ul className={ styles.list }>
      { props.filteredEvents && props.filteredEvents.map((event, index) =>
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
