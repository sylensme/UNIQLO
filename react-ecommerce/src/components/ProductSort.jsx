const ProductSort = ({ onSort }) => {
  return (
    <div className="sort-section mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted small">
          <i className="fas fa-sort me-2"></i>Sort By:
        </span>
        <select className="form-select form-select-sm" style={{ width: '220px' }} onChange={(e) => onSort(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSort;