// Import React Router tools
import { Routes, Route } from "react-router-dom";

// Import components/screens
import Header from "./components/Header";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Category from "./screens/Category";
import Cart from "./screens/Cart";

function App() {
  return (
    <>
      {/* Header shows on ALL pages */}
      <Header />

      {/* Routes controls page navigation */}
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Product details page */}
        {/* :id is a dynamic route parameter */}
        {/* Example: /product/5 */}
        <Route path="/product/:id" element={<Details />} />

        {/* Category page */}
        {/* slug comes from category link */}
        {/* Example: /category/smartphones */}
        <Route path="/category/:slug" element={<Category />} />

        {/* Shopping cart page */}
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </>
  );
}

export default App;