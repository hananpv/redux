import axios from "axios"

const fetchUsers=()=>{
return  async (dispatch)=>{
  dispatch({type:"REQUEST"})


  try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    dispatch({
        type:"SUCCESS",
        payload:res.data,

    })
} catch (error){
        dispatch({
        type:"FAILURE",
        payload:error.message,
})
}
  }
}

export default fetchUsers;