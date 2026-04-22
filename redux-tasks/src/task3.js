
import { createStore } from "redux";
import { applyMiddleware } from "redux";

function counterReducer(state={count:0},action){
    if(action.type==="INC"){
  return { count : state.count + 1}
    }else if(action.type==="DEC"){
        return { count : state.count - 1}
    }
    return state
 

}



const loggerMiddleware = (store)=>(next)=>(action)=>{
    console.log("Before : ",store.getState())
    console.log("dispatching :",action )
    next(action)

    console.log("after : ",store.getState())
}


const store=createStore(counterReducer,applyMiddleware(loggerMiddleware));

store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
