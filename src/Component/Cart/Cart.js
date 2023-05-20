import React from "react";
import { useContext } from "react";
import CartContext from "./CartContext/CartContext";
import "./Cart.css";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const Backdrop = () => {
    return <div className="backdrop" onClick={props.onClose}></div>;
  };

  const CartModal = () => {
    {
      console.log(CartCtx.medicines);
    }
    return (
      <div className="cart">
        {CartCtx.medicines.map((item) => {
          return (
            <div>
              <li key={item.prodName}>{`${item.prodName}`}</li>;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <React.Fragment>
      <Backdrop />
      <CartModal />
    </React.Fragment>
  );
};

export default Cart;
