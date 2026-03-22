import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      background: '#1a1a1a',
      color: 'white',
      padding: '40px 0 20px',
      marginTop: '60px',
      fontSize: '14px'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold text-danger mb-3" style={{ fontSize: '1.3rem' }}>UNIQLO</h4>
            <p className="text-white-50 mb-3">
              LifeWear: Simple, high-quality clothing designed for everyone, everywhere.
            </p>
            <div className="social-links">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/products" className="text-white-50 text-decoration-none">All Products</Link></li>
              <li className="mb-2"><Link to="/products" className="text-white-50 text-decoration-none">New Arrivals</Link></li>
              <li className="mb-2"><Link to="/products" className="text-white-50 text-decoration-none">Best Sellers</Link></li>
              <li className="mb-2"><Link to="/wishlist" className="text-white-50 text-decoration-none">Wishlist</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Customer Care</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none">Contact Us</Link></li>
              <li className="mb-2"><Link to="/policies" className="text-white-50 text-decoration-none">Shipping Info</Link></li>
              <li className="mb-2"><Link to="/policies" className="text-white-50 text-decoration-none">Returns & Exchanges</Link></li>
              <li className="mb-2"><Link to="/policies" className="text-white-50 text-decoration-none">Size Guide</Link></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">About UNIQLO</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> Global Brand, Local Heart</li>
              <li className="mb-2"><i className="fas fa-leaf me-2"></i> Sustainable Fashion</li>
              <li className="mb-2"><i className="fas fa-users me-2"></i> Made for All</li>
              <li className="mb-2"><i className="fas fa-globe me-2"></i> 25+ Countries Worldwide</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-secondary my-4" />
        
        <div className="text-center text-white-50">
          <p className="mb-0">&copy; 2024 UNIQLO. All Rights Reserved. | LifeWear</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;