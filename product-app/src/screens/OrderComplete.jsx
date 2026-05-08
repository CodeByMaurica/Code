import { Link, useLocation } from "react-router-dom";

function OrderComplete() {
  // Gets information sent from Checkout page
  const location = useLocation();

  // Customer/order information
  const customerName = location.state?.customerName || "Customer";
  const confirmationNumber =
    location.state?.confirmationNumber || "MS-ABC-00000";
  const totalPrice = location.state?.totalPrice || 0;
  const orderItems = location.state?.orderItems || [];

  return (
    <div className="checkout-page">
      <div className="success-box">
        <h1>Order Complete!</h1>

        <p>Thank you, {customerName}.</p>
        <p>Your order has been placed successfully.</p>

        <div className="confirmation-box">
          <h2>Confirmation Number</h2>
          <p>{confirmationNumber}</p>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {orderItems.map((item) => (
            <div className="summary-product" key={item.id}>
              <img
                className="summary-product-img"
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="summary-product-info">
                <h4>{item.title}</h4>
                <p className="summary-qty">Qty: {item.quantity}</p>
                <p className="summary-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="summary-row">
            <span>Total Paid:</span>
            <span>${Number(totalPrice).toFixed(2)}</span>
          </div>
        </div>

        <Link to="/">
          <button className="checkout-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderComplete;