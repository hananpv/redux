import { createStore } from "redux";

const initialState = {
  value: 0
};


function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      return state;
  }
}

const store = createStore(counterReducer);


store.subscribe(() => {
  console.log("State Updated:", store.getState());
});


store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });