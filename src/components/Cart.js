import React, { useContext } from "react";
import { CartContext } from "../context/Context";

const Cart = () => {
  const { cart, removeCart, increment, decrement, totalAmount } =
    useContext(CartContext);
  return (
    <>
      {/* <h3>cart</h3> */}
      {cart.map((val) => {
        return (
          <>
            <div className="d-flex justify-content-between item-bg">
              <div>
                <p>{val.title}</p>
                {/* <p>{val.description}</p> */}
              </div>
              <div>
                <p>£{val.price}</p>
              </div>
              <div className="addsub">
                <i class="fas fa-plus" onClick={() => increment(val.id)}></i>
                <input type="text" style={{ width: 30 }} value={val.quantity} />
                <i class="fas fa-minus" onClick={() => decrement(val.id)}></i>
              </div>
              <i class="fas fa-trash" onClick={() => removeCart(val.id)}></i>
            </div>
            <hr></hr>
          </>
        );
      })}
      <div className="total-cart">Total Amount: £{totalAmount}</div>
    </>
  );
};

export default Cart;
