import styles from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarWrapper}>
        <div className={styles.logoWrapper}>
        <img src={logo.src} className={styles.logoImg} />
        <h1>Around the world</h1>
        </div>
        
      
          <ul className={styles.menu}>

            <li>
              <a href="/">All trips</a>
            </li>
            <li>
              <a href="/newTrip">Add new trip</a>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Navbar