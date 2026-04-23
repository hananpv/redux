import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./action";

function App() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state);

  return (
    <div>
      <h2>Redux Thunk API Example</h2>

      <button onClick={() => dispatch(fetchUsers())}>
        Fetch Users
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;