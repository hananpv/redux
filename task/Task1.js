function createStore(reducer) {
  let state;

  return {
    dispatch(action) {
      state = reducer(state, action);
    },
    getState() {
      return state;
    }
  };
}

function reducer(state = { count: 0 }, action) {
  if (action.type === "INC") {
    return { count: state.count + 1 };
  }else if(action.type === "DEC") {
    return {count :state.count - 1};
  }

  return state;
}
const store = createStore(reducer);

store.dispatch({ type: "INC" });
console.log(store.getState()); 

store.dispatch({ type: "INC" });
console.log(store.getState()); 
store.dispatch({ type: "DEC" });
console.log(store.getState());
store.dispatch({ type: "DEC" });
console.log(store.getState()); 
store.dispatch({ type: "DEC" });
console.log(store.getState());












































































