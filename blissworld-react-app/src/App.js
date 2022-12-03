import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/CartPage/Nav";
import Checkout from "./Components/CartPage/Checkout";
import Cartmodal from "./Components/CartPage/Cartmodal";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Cartmodal /> */}
      <Checkout />
    </div>
  );
}

export default App;
