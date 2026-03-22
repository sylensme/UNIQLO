import { NavLink, Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm desktop-nav">
          <div className="container">
            <Link className="navbar-brand fw-bold text-danger" to="/" style={{ fontSize: '1.5rem' }}>
              UNIQLO
            </Link>
            
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}>Shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}>Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/policies" className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}>Policies</NavLink>
                </li>
              </ul>
              
              <div className="d-flex align-items-center gap-3">
                <NavLink to="/wishlist" className="btn btn-outline-danger position-relative">
                  <i className="fas fa-heart"></i>
                  {wishlist.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {wishlist.length}
                    </span>
                  )}
                </NavLink>
                
                <NavLink to="/cart" className="btn btn-outline-danger position-relative">
                  <i className="fas fa-shopping-cart"></i>
                  {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                    </span>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      )}

      {isMobile && (
        <nav className="navbar-bottom">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
          
          <NavLink to="/products" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fas fa-th-large"></i>
            <span>Shop</span>
          </NavLink>
          
          <NavLink to="/wishlist" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fas fa-heart"></i>
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
            <span>Wishlist</span>
          </NavLink>
          
          <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
            <span>Cart</span>
          </NavLink>
          
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </NavLink>
          
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default Navbar;