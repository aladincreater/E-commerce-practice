import "./App.css";
import Products from "./components/products/Products";
import { CartProvider } from "./context/Cartcontext";

function App() {

  return (
    <CartProvider>
      <div className="App">
        <Products />
      </div>
    </CartProvider>
  );
}

export default App;
