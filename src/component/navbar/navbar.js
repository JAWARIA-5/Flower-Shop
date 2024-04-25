import React, { useState } from 'react';
import './navbar.css';

const Navbar = ({ items }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLinkHover = (index) => {
    setActiveDropdown(index);
  };

  const handleLinkLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        {items.map((item, index) => (
          <div
            key={index}
            className="navbar-link"
            onMouseEnter={() => handleLinkHover(index)}
            onMouseLeave={handleLinkLeave}
          >
            {item.label}
            {activeDropdown === index && (
              <div className="dropdown-content">
                {item.options.map((option, idx) => (
                  <a key={idx} href="/">
                    {option}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="navbar-right">
        <img className="icon" alt="" src="/heart_icon.png" />
        <img className="icon" alt="" src="/shopping-cart-icon.png" />
      </div>
    </div>
  );
};

export default Navbar;
