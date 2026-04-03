import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header glass-panel">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logoImage} alt="Little Lemon Logo" className="nav-logo" />
          <span className="brand-name">Little Lemon <span className="title-highlight">Internet Cafe</span></span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/book-pc" className={location.pathname === "/book-pc" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Book PC</Link>
          <Link to="/menu" className={location.pathname === "/menu" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Food Menu</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
