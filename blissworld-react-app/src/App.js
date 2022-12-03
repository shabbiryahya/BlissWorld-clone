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
      
      {/* <ProductCard /> */}
      {/* <AtcBtn /> */}
      {/* <ProductData /> */}
      
      {/* <ProductDescription /> */}
      {/* <PracticeCartPage /> */}
      <AllRoutes />
      <ProductList />
    </div>
  );
}

export default App;
