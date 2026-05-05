import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Header from "./components/Header";
import Category from "./screens/Category";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />

       
        <Route path="/category/:name" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;