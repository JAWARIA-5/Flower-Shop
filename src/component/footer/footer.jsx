import React from 'react';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <p className="fthead">Flower Shop</p>
          <p className="ftbody">Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our passion for flowers, and our commitment to making every moment memorable.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <p className="fthead">Links</p>
          <ul className="ftbody">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <p className="fthead">Contact Us</p>
          <p className="ftbody">
            Address: 13 Fifth Avenue, New York 101660 <br />
            Email: <a href="mailto:contact@info.com">contact@info.com</a> <br />
            Phone: <a href="tel:+91987654321">+91 987 654 321</a>
          </p>
        </div>
      </div>

      {/* Social media icons */}
      <div className="social-icons">
        <FaInstagram />
        <FaFacebookSquare />
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>Copyright  &copy; 2024 Bloomila</p>
      </div>
    </footer>
  );
}

export default Footer;
