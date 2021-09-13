import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import SubItems from "./SubItems";

const Items = () => {
  const { products } = useContext(CartContext);
  return (
    <>
      {products.map((val) => {
        return <SubItems key={val.id} prod={val} />;
      })}
    </>
  );
};

export default Items;
