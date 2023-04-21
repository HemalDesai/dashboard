import React from 'react';
import './MainNavbar.css';

function MainNavbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#home">My Website</a>
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search" className="search-bar" />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default MainNavbar;
