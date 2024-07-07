// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeButton, setActiveButton] = useState('popular');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const handleClick = (path) => {
    setActiveButton(path.slice(1)); // Remove the leading '/' from the path
    navigate(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        Movie App
      </div>
      <div className={styles.navbarLinks}>
        <Link
          to="/popular"
          className={`${styles.navLink} ${activeButton === 'popular' ? styles.active : ''}`}
          onClick={() => handleClick('/popular')}
        >
          Popular
        </Link>
        <Link
          to="/top-rated"
          className={`${styles.navLink} ${activeButton === 'top-rated' ? styles.active : ''}`}
          onClick={() => handleClick('/top-rated')}
        >
          Top Rated
        </Link>
        <Link
          to="/upcoming"
          className={`${styles.navLink} ${activeButton === 'upcoming' ? styles.active : ''}`}
          onClick={() => handleClick('/upcoming')}
        >
          Upcoming
        </Link>
        <form onSubmit={handleSearch} className={styles.navbarSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;