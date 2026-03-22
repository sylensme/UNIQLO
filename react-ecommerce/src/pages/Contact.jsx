import React from 'react';

const Contact = () => {
    return (
        <div className="container my-5" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="row">
                <div className="col-md-7 mx-auto">

                    <h2
                        className="fw-bold text-uppercase mb-4"
                        style={{ borderLeft: '6px solid #FF0000', paddingLeft: '12px' }}
                    >
                        Contact Us
                    </h2>

                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        We are here to help with anything you need, product questions, order concerns,  
                        or simple style advice. Send us a message and our team will reply as soon as possible.
                    </p>

                    <form>
                        <div className="mb-4">
                            <label className="form-label fw-bold text-uppercase small">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ borderRadius: '0', padding: '10px' }}
                                placeholder="Your name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold text-uppercase small">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                style={{ borderRadius: '0', padding: '10px' }}
                                placeholder="Your email address"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold text-uppercase small">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                rows="5"
                                style={{ borderRadius: '0', padding: '10px' }}
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            className="btn w-100 text-white text-uppercase fw-bold"
                            style={{
                                background: '#FF0000',
                                borderRadius: '0',
                                padding: '12px',
                                letterSpacing: '1px'
                            }}
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-5 p-4" style={{ background: '#f8f8f8' }}>
                        <h6 className="fw-bold text-uppercase mb-2">Customer Care</h6>
                        <p className="mb-1 small">Email: support@yourstore.com</p>
                        <p className="mb-1 small">Mon – Fri : 9:00 AM – 6:00 PM</p>
                        <p className="mb-0 small">We reply within 24 hours</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
