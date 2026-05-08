/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

// Creates global cart context
export const CartContext = createContext();

export function CartProvider({ children }) {
  // Stores all products added to cart
  const [cart, setCart] = useState([]);

  // Adds product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Checks if product already exists in cart
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      // If product already exists, increase quantity
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // Otherwise add brand new item to cart
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Removes 1 quantity from cart
  const removeOneFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )

        // Removes item completely if quantity becomes 0
        .filter((item) => item.quantity > 0)
    );
  };

  // Removes entire item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  // Calculates total price of all items
  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);

  // Calculates total number of items in cart
  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeOneFromCart,
        removeFromCart,
        totalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}