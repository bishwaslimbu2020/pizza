import React, { useContext } from "react";
import { CartContext } from "../context/Context";

const Checkout = () => {
  const { totalAmount } = useContext(CartContext);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => alert(`Proceed to pay $ ${totalAmount}`)}
      >
        Check out
      </button>
    </>
  );
};

export default Checkout;
