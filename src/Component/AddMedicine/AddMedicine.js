import React, { useContext, useRef, useState } from "react";
import ListContext from "./ListContext/ListContext";
import Cart from "../Cart/Cart";
import CartContext from "../Cart/CartContext/CartContext";
import CartProvider from "../Cart/CartContext/CartProvider";

const AddMedicine = () => {
  const [showCart, setShowCart] = useState(false);
  const ListCtx = useContext(ListContext);
  const CartCtx = useContext(CartContext);

  const cartHandler = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const addToCart = (medicine) => {
    CartCtx.addMedicine(medicine);
  };

  const inputName = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();
  const inputQuantity = useRef();

  const addMedicine = (event) => {
    event.preventDefault();
    const prodObj = {
      prodName: inputName.current.value,
      prodDescription: inputDescription.current.value,
      prodPrice: inputPrice.current.value,
      prodQuantity: inputQuantity.current.value,
    };
    ListCtx.addMedicine(prodObj);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCart} />}
      <form onSubmit={addMedicine}>
        <label htmlFor="medicine-name">medicinename</label>
        <input ref={inputName} type="text" id="medicine-name" />
        <label htmlFor="description">description</label>
        <input ref={inputDescription} type="text" id="description" />
        <label htmlFor="price">price</label>
        <input ref={inputPrice} type="text" id="price" />
        <label htmlFor="quantity">quantity available</label>
        <input ref={inputQuantity} type="text" id="quantity" />
        <button type="submit">Add Product</button>
        <button onClick={cartHandler}>CART</button>
      </form>

      <div>
        <ul>
          {ListCtx.medicines.map((item) => {
            return (
              <li key={item.prodName}>
                {`${item.prodName} ${item.prodDescription} ${item.prodPrice} ${item.prodQuantity}`}
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  Add To cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </CartProvider>
  );
};

export default AddMedicine;
