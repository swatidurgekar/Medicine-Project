import React, { createContext } from "react";

const CartContext = React.createContext({
  medicines: [],
  addMedicine: (item) => {},
  removeMedicine: () => {},
});

export default CartContext;
