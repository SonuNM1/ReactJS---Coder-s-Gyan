import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products/>} ></Route>
          <Route path="/cart" element={<Cart/>} ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
