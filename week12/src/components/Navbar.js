import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>StudentMS</h2>
      <div>
        <Link to="/" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#282c34",
    color: "white"
  },
  link: {
    margin: "10px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;