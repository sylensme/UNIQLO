import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="container my-5" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="row">

                <div className="col-md-9">

                    <h2
                        className="fw-bold text-uppercase mb-4"
                        style={{ borderLeft: '6px solid #FF0000', paddingLeft: '12px' }}
                    >
                        LifeWear Journal
                    </h2>

                    <div className="mb-5">
                        <p className="text-muted text-uppercase small mb-2">
                            Featured Story
                        </p>

                        <h3 className="fw-bold mb-3" style={{ lineHeight: '1.4' }}>
                            Clothing Designed for Everyday Life
                        </h3>

                        <img
                            src="/src/assets/images/xxx.png"
                            className="img-fluid w-100 mb-4"
                            alt="Uniqlo LifeWear"
                        />

                        <p style={{ lineHeight: '1.9' }}>
                            At UNIQLO, we believe clothing should support the way people live—quietly, comfortably,
                            and reliably. LifeWear is not about trends or seasons. It is about thoughtful design,
                            quality materials, and clothes that feel natural from the moment you put them on.
                        </p>

                        <p style={{ lineHeight: '1.9' }}>
                            Every piece begins with a simple question: how can this make everyday life better?
                            From fabric development to fit testing, each detail is refined to offer comfort,
                            durability, and timeless appeal.
                        </p>

                        <p style={{ lineHeight: '1.9' }}>
                            LifeWear is designed to adapt to different lifestyles, climates, and generations.
                            It is clothing made to be worn, lived in, and trusted—season after season.
                        </p>

                        <p style={{ lineHeight: '1.9' }}>
                            Rather than standing out, LifeWear blends in naturally with your daily routine.
                            It is not fashion that demands attention, but clothing that earns confidence through use.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h4 className="fw-bold text-uppercase mb-4">
                            More Stories
                        </h4>

                        <div className="row mb-4">
                            <div className="col-md-4">
                                <img
                                    src="/src/assets/images/54.png"
                                    className="img-fluid"
                                    alt="Uniqlo T-Shirt"
                                />
                            </div>
                            <div className="col-md-8">
                                <h5 className="fw-bold mb-2">
                                    The Perfect T-Shirt, Reconsidered
                                </h5>
                                <p className="text-muted mb-2" style={{ lineHeight: '1.8' }}>
                                    Our T-shirts are designed with balance in mind—softness without losing structure,
                                    a relaxed fit that feels clean, and fabric that improves with wear.
                                </p>
                                <button
                                    className="btn btn-sm text-uppercase fw-bold"
                                    style={{ background: '#FF0000', color: '#fff', borderRadius: '0' }}
                                >
                                    Read
                                </button>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-4">
                                <img
                                    src="/src/assets/images/68.png"
                                    className="img-fluid"
                                    alt="Uniqlo Outerwear"
                                />
                            </div>
                            <div className="col-md-8">
                                <h5 className="fw-bold mb-2">
                                    Light Layers for Changing Weather
                                </h5>
                                <p className="text-muted mb-2" style={{ lineHeight: '1.8' }}>
                                    From mornings to evenings, our lightweight outerwear adapts effortlessly.
                                    Designed for warmth without bulk, it moves with you throughout the day.
                                </p>
                                <button
                                    className="btn btn-sm text-uppercase fw-bold"
                                    style={{ background: '#FF0000', color: '#fff', borderRadius: '0' }}
                                >
                                    Read
                                </button>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-4">
                                <img
                                    src="/src/assets/images/67.jpg"
                                    className="img-fluid"
                                    alt="Uniqlo Comfort Wear"
                                />
                            </div>
                            <div className="col-md-8">
                                <h5 className="fw-bold mb-2">
                                    Comfort That Lasts All Day
                                </h5>
                                <p className="text-muted mb-2" style={{ lineHeight: '1.8' }}>
                                    Comfort is not a luxury—it is essential. Our everyday wear is tested for movement,
                                    breathability, and long-lasting comfort, no matter how your day unfolds.
                                </p>
                                <button
                                    className="btn btn-sm text-uppercase fw-bold"
                                    style={{ background: '#FF0000', color: '#fff', borderRadius: '0' }}
                                >
                                    Read
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <h6 className="fw-bold text-uppercase mb-3">
                        Categories
                    </h6>

                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <Link to="/blog" className="text-dark text-decoration-none fw-bold">
                                LifeWear Stories
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-dark text-decoration-none">
                                Fabric & Innovation
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-dark text-decoration-none">
                                Everyday Styling
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-dark text-decoration-none">
                                Sustainability
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-dark text-decoration-none">
                                Brand Philosophy
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Blog;
