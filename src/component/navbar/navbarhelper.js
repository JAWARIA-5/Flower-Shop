import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = ({ links }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const distanceFromTop = navbar.offsetTop;
      setIsSticky(window.pageYOffset > distanceFromTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar${isSticky ? ' sticky' : ''}`}>
      <div className="navbar-left">
        <img className="icon" alt="" src="/heart-icon.png" />
        <img className="icon" alt="" src="/shopping-cart-icon.png" />
      </div>
      <div className="navbar-right">
        {links.map((link, index) => (
          <div key={index} className="navbar-link">
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
