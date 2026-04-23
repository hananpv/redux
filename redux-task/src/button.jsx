import { useDispatch } from "react-redux";

function Buttons() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: "INC" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DEC" })}>
        Decrement
      </button>
    </>
  );
}

export default Buttons;