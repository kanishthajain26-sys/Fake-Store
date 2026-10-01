import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useApp();

  if (cart.length === 0) {
    return (
      <div className="empty-page">
        <h1>Your Cart is Empty</h1>
        <p>Add some products to your cart.</p>

        <Link to="/products" className="shop-btn">
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <section className="cart-page">
      <div>
        <h1>Shopping Cart</h1>

        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>

                <div className="quantity">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>

              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Items</span>
          <span>
            {cart.reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </span>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}

export default Cart;