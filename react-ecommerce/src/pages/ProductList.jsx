import { useState, useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import ProductFilter from "../components/ProductFilter";
import ProductSort from "../components/ProductSort";
import SkeletonCard from "../components/SkeletonCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState({ category: '', priceRange: '' });
  const [sortCriteria, setSortCriteria] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const PRODUCTS_PER_PAGE = 8;
  const loaderRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/api/products");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setDisplayedProducts(data.slice(0, PRODUCTS_PER_PAGE));
        
        const uniqueCategories = [...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilterCriteria({ ...filterCriteria, category: category });
  };

  useEffect(() => {
    let result = [...products];
    
    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (filterCriteria.category) {
      result = result.filter(p => p.category === filterCriteria.category);
    }
    if (filterCriteria.priceRange) {
      const [min, max] = filterCriteria.priceRange.split('-').map(Number);
      if (max) {
        result = result.filter(p => p.price >= min && p.price <= max);
      } else {
        result = result.filter(p => p.price >= min);
      }
    }
    switch (sortCriteria) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    
    setFilteredProducts(result);
    setDisplayedProducts(result.slice(0, PRODUCTS_PER_PAGE));
    setPage(1);
  }, [searchTerm, filterCriteria, sortCriteria, products]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observerRef.current.observe(loaderRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [displayedProducts, filteredProducts, loading]);

  const loadMoreProducts = () => {
    if (loading) return;
    
    const nextPage = page + 1;
    const endIndex = nextPage * PRODUCTS_PER_PAGE;
    
    if (displayedProducts.length < filteredProducts.length) {
      const newEndIndex = Math.min(endIndex, filteredProducts.length);
      setDisplayedProducts(filteredProducts.slice(0, newEndIndex));
      setPage(nextPage);
    }
  };

  if (loading) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2 col-md-3 mb-4"><Sidebar /></div>
          <div className="col-lg-10 col-md-9">
            <div className="row">
              {[...Array(8)].map((_, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                  <SkeletonCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger">
          <h5>⚠️ Error loading products</h5>
          <p>{error}</p>
          <button className="btn btn-outline-danger btn-sm" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar 
            onCategorySelect={handleCategorySelect} 
            selectedCategory={selectedCategory}
          />
        </div>

        <div className="col-lg-10 col-md-9">
          <h2 className="fw-bold mb-4 text-danger" style={{ borderLeft: "5px solid #FF0000", paddingLeft: "15px" }}>
            All Products
          </h2>

          <SearchBar onSearch={setSearchTerm} />
          <ProductFilter onFilter={setFilterCriteria} categories={categories} />
          <ProductSort onSort={setSortCriteria} />

          <p className="text-muted mb-3">
            Showing {displayedProducts.length} of {filteredProducts.length} products
          </p>

          <div className="row">
            {displayedProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {displayedProducts.length < filteredProducts.length ? (
            <div ref={loaderRef} className="text-center py-4" style={{ minHeight: '100px' }}>
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2 text-muted">Loading more products...</p>
            </div>
          ) : (
            <div className="text-center py-3">
              <p className="text-muted small">
                <i className="fas fa-check me-1"></i>
                All {filteredProducts.length} products loaded
              </p>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4>No products found</h4>
              <p className="text-muted">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;