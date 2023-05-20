import logo from "./logo.svg";
import "./App.css";
import ListProvider from "./Component/AddMedicine/ListContext/ListProvider";
import AddMedicine from "./Component/AddMedicine/AddMedicine";
import CartProvider from "./Component/Cart/CartContext/CartProvider";

function App() {
  return (
    <ListProvider>
      <CartProvider>
        <AddMedicine />
      </CartProvider>
    </ListProvider>
  );
}

export default App;
