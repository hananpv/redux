import {useDispatch,useSelector} from "react-redux" 
import fetchUsers from "./action"
import React from 'react'

function App() {
  const dispatch = useDispatch()
  const {loading,users,error}=useSelector(
    (state)=>state
  )
  
  return (
    <div>
      
      <button onClick={()=>dispatch(fetchUsers())}>show user</button>

      {loading  && <p>loading...</p>}
    {error && <p>{error}</p>}


{
  users.map((user)=>(
    <p key={user.id}>{user.name}</p>
  ))
}


    </div>
    
  )
}

export default App
