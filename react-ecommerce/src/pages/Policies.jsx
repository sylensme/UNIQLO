import React from 'react';

const Policies = () => {
    return (
        <div className="container my-5" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="row">
                <div className="col-md-9 mx-auto text-dark">

                    <h2 className="fw-bold mb-5 text-uppercase"
                        style={{ letterSpacing: '1px', borderLeft: '6px solid #FF0000', paddingLeft: '12px' }}>
                        Store Policies
                    </h2>

                    <div className="mb-5">
                        <h5 className="fw-bold text-uppercase mb-3">Return Policy</h5>
                        <p style={{ lineHeight: '1.8' }}>
                            At our store, comfort and confidence come first. If your item does not fit your lifestyle,  
                            you may return it within 30 days in its original condition. We believe shopping should feel  
                            simple and worry-free, just like wearing your favorite everyday clothes.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h5 className="fw-bold text-uppercase mb-3">Shipping & Delivery</h5>
                        <p style={{ lineHeight: '1.8' }}>
                            Every order is prepared with care and attention to detail. Standard delivery takes  
                            3–7 business days, and orders over $75 are shipped free. A tracking number will be sent  
                            so you can follow your package from our hands to yours.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h5 className="fw-bold text-uppercase mb-3">Privacy Policy</h5>
                        <p style={{ lineHeight: '1.8' }}>
                            We respect your personal space the same way we respect personal style. Your information  
                            is used only to process orders and improve your experience. It is never shared or sold,  
                            and all transactions are protected with secure technology.
                        </p>
                    </div>

                    <div className="mb-5" style={{ background: '#f8f8f8' }}>
                        <h5 className="fw-bold text-uppercase mb-3">Our Promise</h5>
                        <p style={{ lineHeight: '1.8' }}>
                            We believe good products should make everyday life better. Our policies are designed  
                            to be clear, human, and helpful—just like the simple, functional designs we stand for.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Policies;
