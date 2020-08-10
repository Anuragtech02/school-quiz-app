import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h2>SchoolQuiz</h2>
      </div>
      <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/profile">My Profile</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
