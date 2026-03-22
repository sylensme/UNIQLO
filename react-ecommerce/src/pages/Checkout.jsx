import { useState } from "react";
import { useCart } from "../context/CartContext";  
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useCart();  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "cod"
  });

  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please complete all fields");
      return;
    }

    setFinalTotal(total);

    clearCart(); 

    setSubmitted(true);
  };

  if (cart.length === 0 && !submitted) {
    return (
      <div className="container my-5 text-center">
        <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
        <h3 className="mb-4">Your Cart is Empty</h3>
        <p className="text-muted mb-4">Add some products before checkout.</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Go Shopping
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container mt-5 text-center">
        <i className="fas fa-check-circle fa-5x text-success mb-4"></i>
        <h2 className="mb-3">Order Confirmed!</h2>
        <p className="lead">Thank you, <strong>{form.name}</strong>. Your order has been placed.</p>
        <div className="card bg-light mx-auto mt-4" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <h5 className="card-title">Order Summary</h5>
            <hr />
            <p className="mb-1"><strong>Name:</strong> {form.name}</p>
            <p className="mb-1"><strong>Email:</strong> {form.email}</p>
            <p className="mb-1"><strong>Address:</strong> {form.address}</p>
            <p className="mb-1"><strong>Phone:</strong> {form.phone}</p>
            <p className="mb-1"><strong>Payment:</strong> {form.payment.toUpperCase()}</p>
            <hr />
            <p className="mb-0"><strong>Total Amount:</strong> <span className="text-danger fw-bold">P{finalTotal.toFixed(2)}</span></p>
          </div>
        </div>
        <Link to="/products" className="btn btn-primary btn-lg mt-4">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 
        className="fw-bold text-uppercase mb-4" 
        style={{ borderLeft: "6px solid #FF0000", paddingLeft: "12px" }}
      >
        Checkout
      </h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Customer Information</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address *</label>
                  <textarea
                    name="address"
                    className="form-control"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, Philippines"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone *</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0917 123 4567"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Payment Method *</label>
                  <select
                    name="payment"
                    className="form-control"
                    value={form.payment}
                    onChange={handleChange}
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="gcash">GCash</option>
                    <option value="card">Credit/Debit Card</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-success w-100 btn-lg">
                  <i className="fas fa-check-circle me-2"></i>Place Order
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm bg-light">
            <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>
              
              {cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>P{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>P{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (12% VAT)</span>
                <span>P{tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-bold">Total</h5>
                <h5 className="fw-bold text-danger">P{total.toFixed(2)}</h5>
              </div>

              <div className="alert alert-info">
                <i className="fas fa-info-circle me-2"></i>
                <small>Free shipping on all orders!</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;