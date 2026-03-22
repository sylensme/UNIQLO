import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
        <h3 className="mb-4">Your Cart is Empty</h3>
        <p className="text-muted mb-4">Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 
        className="fw-bold text-uppercase mb-4" 
        style={{ borderLeft: "6px solid #FF0000", paddingLeft: "12px" }}
      >
        Shopping Cart
      </h2>

      <div className="row">
        <div className="col-lg-8">
          {cart.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                    style={{ height: "150px", objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-danger fw-bold">P{item.price}</p>
                    
                    <div className="d-flex align-items-center gap-3">
                      <div className="btn-group">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <button className="btn btn-outline-secondary" disabled>
                          {item.quantity}
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button className="btn btn-outline-danger mt-3" onClick={clearCart}>
            <i className="fas fa-trash-alt me-2"></i> Clear Cart
          </button>
        </div>

        <div className="col-lg-4">
          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title fw-bold">Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>P{totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span className="fw-bold">Total</span>
                <span className="fw-bold text-danger">P{totalPrice.toFixed(2)}</span>
              </div>
                <Link to="/checkout" className="btn btn-success w-100 btn-lg">
                <i className="fas fa-credit-card me-2"></i>Proceed to Checkout
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;