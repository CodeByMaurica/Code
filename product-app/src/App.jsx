import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Screens
import Home from "./screens/Home";
import Details from "./screens/Details";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import OrderComplete from "./screens/OrderComplete";
import Category from "./screens/Category";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Product details page */}
        <Route
          path="/product/:id"
          element={<Details />}
        />

        {/* Category page */}
        <Route
          path="/category/:slug"
          element={<Category />}
        />

        {/* Cart page */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Checkout page */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Order complete page */}
        <Route
          path="/order-complete"
          element={<OrderComplete />}
        />
      </Routes>
    </>
  );
}

export default App;