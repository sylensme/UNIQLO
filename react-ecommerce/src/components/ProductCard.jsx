import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id));

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="card h-100 shadow-sm product-card">
      <div className="product-img-wrapper" style={{ height: "320px", position: "relative" }}>
        <button
          className="btn btn-light position-absolute"
          style={{ 
            top: '10px', 
            right: '10px', 
            borderRadius: '50%', 
            width: '40px', 
            height: '40px',
            zIndex: 10
          }}
          onClick={handleToggleWishlist}
        >
          <i className={`fas fa-heart ${isWishlisted ? 'text-danger' : 'text-muted'}`}></i>
        </button>

        {product.discount && (
          <div className="sale-badge" style={{
            position: "absolute", 
            top: "10px", 
            left: "10px",
            background: "#FF0000", 
            color: "white", 
            padding: "5px 10px",
            borderRadius: "4px", 
            fontWeight: "bold",
            zIndex: 10
          }}>
            -{product.discount}%
          </div>
        )}

        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="card-title mb-2">{product.name}</h6>
        
        <div className="mb-3 text-warning">
          {[...Array(5)].map((star, index) => (
            <i key={index} className={`fa-star ${index < product.rating ? 'fas' : 'far'} fa`}></i>
          ))}
        </div>
        
        <div className="mb-4">
          <span className="text-muted text-decoration-line-through me-2">
            ₱{product.oldPrice}
          </span>
          <span className="fw-bold text-danger">₱{product.price}</span>
        </div>

        <button 
          className="btn btn-danger w-100 mt-auto" 
          onClick={handleAddToCart}
          style={{ 
            fontWeight: '600',
            padding: '10px',
            borderRadius: '6px'
          }}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;