import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  // Pull cart data and cart functions from CartContext
  const {
    cart,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    totalPrice,
    cartCount,
  } = useContext(CartContext);

  // If cart is empty show message
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart Is Empty</h1>

        {/* Sends user back home */}
        <Link to="/">
          <button className="checkout-btn">Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Product image */}
              <img src={item.thumbnail} alt={item.title} />

              <div className="cart-info">
                <h3>{item.title}</h3>

                <p>Price: ${item.price}</p>

                {/* Quantity buttons */}
                <div className="quantity-controls">
                  <button onClick={() => removeOneFromCart(item.id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => addToCart(item)}>+</button>
                </div>

                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          {/* Shows each item in order summary with image, name, quantity, and price */}
          {cart.map((item) => (
            <div className="summary-product" key={item.id}>
              <img
                className="summary-product-img"
                src={item.thumbnail}
                alt={item.title}
              />

              <div>
                <h4>{item.title}</h4>

                <p>Quantity: {item.quantity}</p>

                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="summary-row">
            <span>Total Items:</span>
            <span>{cartCount}</span>
          </div>

          <div className="summary-row">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn">Proceed To Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;