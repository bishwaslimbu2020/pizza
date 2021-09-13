import React, { useReducer, createContext, useEffect } from "react";
import { Data } from "../components/Data";
import { reducer } from "./reducer";

//creating contetxt
export const CartContext = createContext();

//creating initial state
const initialState = {
  products: Data,
  cart: [],
  totalAmount: 0,
  totalItem: 0,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //add to cart
  const addToCart = (id) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: id,
    });
  };

  //remove cart
  const removeCart = (id) => {
    return dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  //to increase
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  //to decrease
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("bishwas");
  }, [state.cart]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, addToCart, removeCart, increment, decrement }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Context;

//export Context to index.js not CartContext
