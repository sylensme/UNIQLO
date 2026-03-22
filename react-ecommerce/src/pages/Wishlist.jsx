import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="container my-5 text-center">
        <i className="fas fa-heart fa-4x text-muted mb-4"></i>
        <h3 className="mb-4">Your Wishlist is Empty</h3>
        <p className="text-muted mb-4">Save your favorite UNIQLO items here!</p>
        <Link to="/products" className="btn btn-danger btn-lg">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-danger" style={{ borderLeft: "5px solid #FF0000", paddingLeft: "15px" }}>
        <i className="fas fa-heart me-2"></i>My Wishlist
      </h2>
      
      <div className="row">
        {wishlist.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
            <button
              className="btn btn-outline-danger btn-sm w-100 mt-2"
              onClick={() => removeFromWishlist(product.id)}
            >
              <i className="fas fa-trash me-2"></i>Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;