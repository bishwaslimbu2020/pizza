import React, { useContext } from "react";
import { CartContext } from "../context/Context";

const SubItems = ({ prod }) => {
  const { cart, addToCart, removeCart } = useContext(CartContext);
  return (
    <>
      <div>
        <div>
          <h5>{prod.title}</h5>
          <h6>{prod.description}</h6>
        </div>
        <div className="meal-price d-flex align-items-center">
          <p>£{prod.price}</p>
          {/* <i class="fas fa-plus-square"></i> */}
        </div>
      </div>

      <div>
        {cart.some((p) => p.id === prod.id) ? (
          <button
            className="btn btn-danger"
            onClick={() => removeCart(prod.id)}
          >
            remove
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => addToCart(prod)}>
            add to cart
          </button>
        )}
      </div>

      <hr />
    </>
  );
};

export default SubItems;

//in addToCart argument is passed as prod but in removeCart, argument is passed as prod.id
