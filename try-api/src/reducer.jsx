import React from 'react'
const initialState ={
  loading:false,
  users:[],
  error:""

}
function reducer(state = initialState,action) {
if(action.type==="REQUEST"){
  return {...state,loading:true}
}
else if(action.type==="SUCCESS"){
  return{
    loading:false,
    users:action.payload,
    error:""
  }

}else if(action.type==="FAILURE"){
  return {
    loading:false,
    users:[],
    error:action.payload
  }

}else{
return state

}

}

export default reducer
