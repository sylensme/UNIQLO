import { useState } from 'react';

const ProductFilter = ({ onFilter, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilter({ category: e.target.value, priceRange });
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    onFilter({ category: selectedCategory, priceRange: e.target.value });
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange('');
    onFilter({ category: '', priceRange: '' });
  };

  return (
    <div className="filter-section mb-4 p-3 bg-light rounded">
      <h6 className="fw-bold mb-3 text-danger">
        <i className="fas fa-filter me-2"></i>Filter Products
      </h6>
      
      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label small">Category</label>
          <select className="form-select form-select-sm" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="col-md-4">
          <label className="form-label small">Price Range</label>
          <select className="form-select form-select-sm" value={priceRange} onChange={handlePriceChange}>
            <option value="">All Prices</option>
            <option value="0-1000">Under ₱1,000</option>
            <option value="1000-2000">₱1,000 - ₱2,000</option>
            <option value="2000-3000">₱2,000 - ₱3,000</option>
            <option value="3000+">Above ₱3,000</option>
          </select>
        </div>
        
        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-outline-danger btn-sm w-100" onClick={clearFilters}>
            <i className="fas fa-times me-1"></i>Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;