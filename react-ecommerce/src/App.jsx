import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Policies from './pages/Policies';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      
      <div className="container-fluid px-4 py-4 app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;