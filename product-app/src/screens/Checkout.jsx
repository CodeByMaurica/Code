import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  // Pull cart data from CartContext
  const { cart, totalPrice } =
    useContext(CartContext);

  // Lets us move user to another page
  const navigate = useNavigate();

  // Stores checkout form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
  });

  // Updates form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,

      // Updates correct field
      [e.target.name]: e.target.value,
    });
  };

  // Creates random confirmation number
  const createConfirmationNumber = () => {
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers = "0123456789";

    let confirmation = "MS-";

    // Add random letters
    for (let i = 0; i < 3; i++) {
      confirmation +=
        letters[
          Math.floor(
            Math.random() * letters.length
          )
        ];
    }

    confirmation += "-";

    // Add random numbers
    for (let i = 0; i < 5; i++) {
      confirmation +=
        numbers[
          Math.floor(
            Math.random() * numbers.length
          )
        ];
    }

    return confirmation;
  };

  // Runs when user submits form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Makes sure fields are filled out
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.cardNumber
    ) {
      alert(
        "Please fill out all checkout fields."
      );

      return;
    }

    // Creates confirmation number
    const confirmationNumber =
      createConfirmationNumber();

    // Sends user to order complete page
    navigate("/order-complete", {
      state: {
        customerName: formData.name,

        confirmationNumber:
          confirmationNumber,

        totalPrice: totalPrice,

        // Sends cart items
        orderItems: cart,
      },
    });
  };

  // Stops checkout if cart is empty
  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h1>Your Cart Is Empty</h1>

        <p>
          Add products before checking out.
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      {/* Page title */}
      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Checkout form */}
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <h2>Shipping Information</h2>

          {/* Full name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <h2>Payment Information</h2>

          {/* Card number */}
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
          />

          {/* Submit button */}
          <button
            type="submit"
            className="checkout-btn"
          >
            Place Order
          </button>
        </form>

        {/* Checkout order summary */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          {/* Shows cart items */}
          {cart.map((item) => (
            <div
              className="summary-product"
              key={item.id}
            >

              {/* Product image */}
              <img
                className="summary-product-img"
                src={item.thumbnail}
                alt={item.title}
              />

              {/* Product information */}
              <div className="summary-product-info">

                {/* Product title */}
                <h4>{item.title}</h4>

                {/* Quantity */}
                <p className="summary-qty">
                  Qty: {item.quantity}
                </p>

                {/* Product subtotal */}
                <p className="summary-price">
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="summary-row">
            <span>Total:</span>

            <span>
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;