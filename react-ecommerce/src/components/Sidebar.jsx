import { useState, useEffect } from 'react';

const Sidebar = ({ onCategorySelect, selectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/api/products");
        const data = await response.json();
        const uniqueCategories = [...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handleClearFilters = () => {
    onCategorySelect('');
  };

  return (
    <div className="sidebar-container p-3 bg-light rounded">
      <h6 className="fw-bold mb-3 text-danger">
        <i className="fas fa-filter me-2"></i>Categories
      </h6>

      <button
        className={`btn w-100 text-start mb-2 ${selectedCategory === '' ? 'btn-danger' : 'btn-outline-secondary'}`}
        onClick={handleClearFilters}
        style={{ fontSize: '13px', padding: '8px 12px' }}
      >
        <i className="fas fa-th me-2"></i>All Products
      </button>

      <div className="category-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn w-100 text-start mb-2 ${selectedCategory === category ? 'btn-danger' : 'btn-outline-secondary'}`}
            onClick={() => handleCategoryClick(category)}
            style={{ fontSize: '13px', padding: '8px 12px' }}
          >
            <i className="fas fa-tag me-2"></i>{category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <button
          className="btn btn-outline-danger btn-sm w-100 mt-3"
          onClick={handleClearFilters}
        >
          <i className="fas fa-times me-1"></i>Clear Filter
        </button>
      )}
    </div>
  );
};

export default Sidebar;