import "../styles/Footer.css";
import logoImage from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logoImage} alt="Little Lemon Logo" className="footer-logo" />
          <p>The ultimate destination for high-end gaming and delicious cafe food.</p>
        </div>
        
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/book-pc">Book PC</a></li>
            <li><a href="/menu">Food Menu</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Gamer Street, Tech City</p>
          <p>Email: play@littlelemon.com</p>
          <p>Phone: +1 234 567 8900</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon Internet Cafe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
