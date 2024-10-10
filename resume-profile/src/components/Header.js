import React from 'react';
import './Header.css'; // We’ll add a custom CSS file for this component

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Dhruv Bhatia</h1>
        <p className="location">Cerritos, California 90703</p>
        <p className="contact">
          <a href="mailto:Dhruvbhatia.04@hotmail.com">Dhruvbhatia.04@hotmail.com</a> | 
          <a href="https://www.linkedin.com/in/dhruv-bhatia8" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
