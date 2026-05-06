import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p className="message">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.cartId}>
            <img src={item.thumbnail} alt={item.title} />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>{item.brand}</p>
              <p>${item.price}</p>
            </div>

            {/* Remove only this cart item */}
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.cartId)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;