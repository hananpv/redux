import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fetchuser from "./useraction";

const Users = () => {
  const dispatch = useDispatch();

  // ✅ Correct (no warning + no crash)
  const { loading, users = [], error } = useSelector((state) => ({
    loading: state.loading,
    users: state.users,
    error: state.error,
  }))

useEffect(() => {
    dispatch(Fetchuser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {users?.map((u) => (   // 👈 optional chaining safety
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;