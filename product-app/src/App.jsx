import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details"; // <-- ADD THIS

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* : means parameter */ }
      <Route path="/product/:id" element={<Details />} />
    </Routes>
  );
}

export default App;