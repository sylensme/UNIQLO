import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="top-header" style={{ 
      background: '#FF0000',
      color: 'white',
      padding: '6px 0',
      fontSize: '12px',
      fontWeight: '500'
    }}>
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex gap-3">
          <span><i className="fas fa-truck me-1"></i> Free Shipping ₱1,500+</span>
          <span className="d-none d-md-inline"><i className="fas fa-undo me-1"></i> Free Returns</span>
        </div>
        <div className="d-flex gap-3">
          <span><i className="fas fa-phone me-1"></i> 1800-UNIQLO</span>
          <span className="d-none d-sm-inline"><i className="fas fa-clock me-1"></i> Mon-Sun 9AM-9PM</span>
        </div>
      </div>
    </div>
  );
};

export default Header;