import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "./cartSlice";

function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    getData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>₹{Math.round(p.price * 80)}</p>

          <button onClick={() => dispatch(addToCart(p))}>
            Add
          </button>
        </div>
      ))}
.
0
      <hr />

      <h2>Cart</h2>


      {cartItem.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <button onClick={() => dispatch(decreaseQty(item.id))}>
            -
          </button>

          <span>{item.qty}</span>

          <button onClick={() => dispatch(increaseQty(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;