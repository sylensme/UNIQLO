const SkeletonCard = () => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="skeleton-image" style={{ height: "320px", background: '#f0f0f0' }}></div>
      <div className="card-body d-flex flex-column">
        <div className="skeleton-text" style={{ height: "20px", width: "85%", background: '#f0f0f0', marginBottom: '10px', borderRadius: '4px' }}></div>
        <div className="skeleton-text" style={{ height: "15px", width: "50%", background: '#f0f0f0', marginBottom: '15px', borderRadius: '4px' }}></div>
        <div className="skeleton-text" style={{ height: "25px", width: "45%", background: '#f0f0f0', marginBottom: '20px', borderRadius: '4px' }}></div>
        <div className="skeleton-button" style={{ height: "38px", width: "100%", background: '#f0f0f0', borderRadius: '6px' }}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;