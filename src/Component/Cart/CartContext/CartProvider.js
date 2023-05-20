import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (newMedicine) => {
    setMedicines((prevState) => [...prevState, newMedicine]);
    console.log(medicines);
  };

  const removeMedicine = () => {};

  const cartContext = {
    medicines: medicines,
    addMedicine: addMedicine,
    removeMedicine: removeMedicine,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
