/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Stores all items added to cart
  const [cart, setCart] = useState([]);

  // Adds product to cart
  const addToCart = (product) => {
    const cartItem = {
      ...product,

      // Gives each cart item a unique ID
      // This prevents remove button from deleting duplicates
      cartId: crypto.randomUUID(),
    };

    setCart((prevCart) => [...prevCart, cartItem]);
  };

  // Removes only the clicked cart item
  const removeFromCart = (cartId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.cartId !== cartId)
    );
  };

  // Adds all item prices together
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}