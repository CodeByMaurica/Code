import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import { CartProvider } from "./context/CartContext.jsx";

import "./index.css";

/* Toastify imports */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <CartProvider>

        <App />

        {/* Toast popup container */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          theme="dark"
        />

      </CartProvider>

    </BrowserRouter>
  </StrictMode>
);