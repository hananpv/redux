import { createStore, combineReducers } from "redux";
export default function App(state ={count:0},action){

  if(action.type==="INC"){
    return {count : state.count +action.payload}
  }else if(action.type==="DEC"){
    return{count : state.count-action.payload}
  }
  return state

}
function userReducer(state = { name: "" }, action) {
  switch (action.type) {
    case "SET_NAME":
      return { name: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: App,
  user: userReducer
});


const store = createStore(rootReducer);
store.dispatch({ type: "INC",payload:10});
store.dispatch({ type: "SET_NAME", payload: "Hanan" });

console.log(store.getState());