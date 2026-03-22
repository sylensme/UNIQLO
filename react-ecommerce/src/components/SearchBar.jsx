import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-container mb-4">
      <div className="input-group" style={{ maxWidth: '500px' }}>
        <span className="input-group-text bg-white border-end-0">
          <i className="fas fa-search text-muted"></i>
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search UNIQLO products..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ borderRadius: '25px 0 0 25px' }}
        />
        {searchTerm && (
          <button
            className="btn btn-outline-secondary border-start-0"
            onClick={() => { setSearchTerm(''); onSearch(''); }}
            style={{ borderRadius: '0 25px 25px 0' }}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;