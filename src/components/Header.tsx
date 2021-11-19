import { useState } from "react";
import Logo from "../assets/images/devjane.png";
import styles from "../assets/styles/nav.module.css";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "My Resume",
    to: "/resume",
  },
  {
    text: "My Projects",
    to: "/projects",
  },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <button
        onClick={handleToggleNav}
        className={`${styles.toggle} ${navOpen ? styles.toggleOpen : ""}`}
        aria-label="toggle navigation"
      >
        <span className={styles.hamburger}></span>
      </button>

      <nav
        className={`${styles.nav} ${
          navOpen ? styles.navOpen : styles.navClose
        }`}
      >
        <ul className={styles.navList}>
          {navItems.map(({ text, to }) => (
            <li className={styles.navItem} key={text}>
              <NavLink 
                to={to}
                className={styles.navLink}
                style={({ isActive}) => {
                  return {
                    color: isActive ? "var(--clr-accent)" : ""
                  }
                }}
                onClick={handleToggleNav}
              >
                {text}
              </NavLink> 
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
