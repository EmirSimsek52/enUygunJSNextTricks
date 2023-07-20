"use client"
import styles from   "styles/styles.module.css"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <div className={styles.navbarLogo}>
          <a href="/">Logo</a>
        </div>
        <ul className={styles.navbarLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className={styles.navbarToggle} onClick={handleToggle}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
