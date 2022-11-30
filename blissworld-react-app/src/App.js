import "./App.css";
import ProductCard from "./Components/ProductPage/ProductCard/ProductCard";
import { AtcBtn } from "./Components/ProductPage/AddToCart/AtcBtn";
import { ProductList } from "./Components/ProductPage/ProductList/ProductList";


function App() {
  return (
    <div className="App">
      {/* <ProductCard /> */}
      {/* <AtcBtn /> */}
      <ProductList />
    </div>
  );
}

export default App;
