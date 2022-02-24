import { createStore } from "redux";

const stateReducer = (state = { isOpen: false }, action) => {
  if (action.type === "open") {
    return {
      isOpen: state.isOpen = true
    };
  }

  if (action.type === "close") {
    return {
      isOpen: state.isOpen = false
    };
  }

  return state;
};

const store = createStore(stateReducer);

export default store;

