// import { createStore, combineReducers } from "redux";
// export default function App(state ={count:0},action){

//   if(action.type==="INC"){
//     return {count : state.count +action.payload}
//   }else if(action.type==="DEC"){
//     return{count : state.count-action.payload}
//   }
//   return state

// }
// function userReducer(state = { name: "" }, action) {
//   switch (action.type) {
//     case "SET_NAME":
//       return { name: action.payload };
//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//   counter: App,
//   user: userReducer
// });


// const store = createStore(rootReducer);
// store.dispatch({ type: "INC",payload:10});
// store.dispatch({ type: "SET_NAME", payload: "Hanan" });

// console.log(store.getState());

import { createStore, applyMiddleware } from "redux";

// Reducer
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Middleware
const logger = store => next => action => {
  console.log("1️⃣ Before Action:", action);
  console.log("2️⃣ Current State:", store.getState());

  next(action); // 👉 passes action to reducer

  console.log("3️⃣ After State:", store.getState());
};

// Store
const store = createStore(reducer, applyMiddleware(logger));

// Dispatch
store.dispatch({ type: "INC" });