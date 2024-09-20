import React, { useState } from 'react';
import "./Dropdown.css"

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <label className={!isOpen ? "dropdown-button" : "dropdown-button active"} onClick={toggleDropdown}>
            {title} 
      </label>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
                  <a href="#" className="dropdown-link">    
                        {item}
                  </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;