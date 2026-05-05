import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Category from "./screens/Category";
import Cart from "./screens/Cart";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;