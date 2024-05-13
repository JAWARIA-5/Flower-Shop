import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './navbar.css';
import heartIcon from '../images/heart_icon.png';
import cartIcon from '../images/shopping-cart.jpeg';
import userIcon from '../images/user.jpeg';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const handleLinkHover = (index) => {
    setActiveDropdown(index);
  };

  const handleLinkLeave = () => {
    setActiveDropdown(null);
  };

  const items = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'About',
      options: [
        { label: 'About Us', path: '/aboutus' }, 
        { label: 'Blog Page', path: '/blog' } 
      ]
    },
    {
      label: 'Shop',
      options: [
        { label: 'Best Seller', path: '/bestseller' }, 
        { label: 'Seasonal Flower', path: '/seasonal' } 
      ]
    },
    {
      label: 'Contact',
      options: ['Option 6', 'Option 7', 'Option 8', 'Option 9']
    }
  ];

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
            {item.options ? (
              <>
                {item.label}
                {activeDropdown === index && (
                  <div className="dropdown-content">
                    {item.options.map((option, idx) => (
                      <Link key={idx} to={option.path}>
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </div>
        ))}
      </div>
      <div className="navbar-right">
        <img className="icon" alt="" src={userIcon} />
        <img className="icon" alt="" src={heartIcon} />
        <div className="cart-container">
          <img className="icon cart-icon" alt="" src={cartIcon} />
          <div className="cart-count">{cartCount}</div> {/* Cart count */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
