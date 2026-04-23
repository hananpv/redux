const initialState = {
  loading: false,
  users: [],
  error: "",
};

function reducer(state = initialState, action) {

  if (action.type === "FETCH_REQUEST") {
    return { ...state, loading: true };
  } 
  
  else if (action.type === "FETCH_SUCCESS") {
    return {
      loading: false,
      users: action.payload,
      error: "",
    };
  } 
  
  else if (action.type === "FETCH_FAILURE") {
    return {
      loading: false,
      users: [],
      error: action.payload,
    };
  } 
  
  else {
    return state;
  }
}

export default reducer;