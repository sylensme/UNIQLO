const About = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-danger" style={{ borderLeft: "5px solid #FF0000", paddingLeft: "15px" }}>
        About UNIQLO
      </h2>
      
      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="/images/lifewear.png"
            alt="UNIQLO LifeWear" 
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold mb-3">LifeWear: Clothing for a Better Life</h4>
          <p className="text-muted">
            UNIQLO is a Japanese casual wear designer, manufacturer and retailer. 
            Our mission is to provide high-quality, functional clothing at affordable prices.
          </p>
          <p className="text-muted">
            We believe that clothing should be simple, practical, and comfortable. 
            Our products are designed to support your daily life—quietly and reliably—
            so you can focus on what matters most.
          </p>
          <ul className="list-unstyled mt-4">
            <li className="mb-2"><i className="fas fa-check text-danger me-2"></i> Quality materials & craftsmanship</li>
            <li className="mb-2"><i className="fas fa-check text-danger me-2"></i> Innovative fabric technologies</li>
            <li className="mb-2"><i className="fas fa-check text-danger me-2"></i> Sustainable & ethical production</li>
            <li className="mb-2"><i className="fas fa-check text-danger me-2"></i> Designed for everyone, everywhere</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;