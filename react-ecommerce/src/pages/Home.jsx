import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";     
import ProductCard from "../components/ProductCard";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.avif";
import banner3 from "../assets/images/banner3.avif";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/api/products");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const featuredProducts = products.slice(0, 4);

  if (loading) {
    return (
      <div className="container my-4 text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading featured items...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger">
          <h5>⚠️ Error loading products</h5>
          <p>{error}</p>
          <button 
            className="btn btn-outline-danger btn-sm"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4" style={{ fontFamily: "Arial, sans-serif" }}>

      <div id="homeCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="LifeWear Banner" />
          </div>

          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Everyday Essentials" />
          </div>

          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="Seasonal Collection" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <h3
        className="fw-bold text-uppercase mb-4"
        style={{ borderLeft: "6px solid #FF0000", paddingLeft: "12px" }}
      >
        Featured Items
      </h3>

      <div className="row">
        {featuredProducts.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="text-center mt-4 mb-5">
        <Link to="/products" className="btn btn-outline-danger btn-lg">
          View All Products
          <i className="fas fa-arrow-right ms-2"></i>
        </Link>
      </div>

      <div className="mt-5 p-5 text-center" style={{ background: "#f8f8f8" }}>
        <h4 className="fw-bold text-uppercase mb-3">
          Designed for Everyday Life
        </h4>
        <p className="mx-auto" style={{ maxWidth: "700px", lineHeight: "1.9" }}>
          We believe clothing should be simple, practical, and comfortable.
          Our products are designed to support your daily life—quietly and reliably—
          so you can focus on what matters most.
        </p>
      </div>
    </div>
  );
};

export default Home;