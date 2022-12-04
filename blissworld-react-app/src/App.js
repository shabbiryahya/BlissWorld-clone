import "./App.css";
import Nav from "./Components/CartPage/Nav";
import Checkout from "./Components/CartPage/Checkout";
import Cartmodal from "./Components/CartPage/Cartmodal";
import "./App.css";
import ProductCard from "./Components/ProductPage/ProductCard/ProductCard";
import { AtcBtn } from "./Components/ProductPage/AddToCart/AtcBtn";
import { ProductList } from "./Components/ProductPage/ProductList/ProductList";

import { AllRoutes } from "./AllRoutes";
import { PracticeCartPage } from "./Components/NewCart/PracticeCartPage";
import { ProductDescription } from "./Components/ProductPage/ProductDescription/ProductDescription";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      {/* <Cartmodal /> */}
      <Checkout />
      {/* <ProductCard /> */}
      {/* <AtcBtn /> */}
      {/* <ProductData /> */}

      {/* <ProductDescription /> */}
      {/* <PracticeCartPage /> */}
      {/* <AllRoutes /> */}
      {/* <ProductList /> */}
    </div>
  );
}

export default App;
