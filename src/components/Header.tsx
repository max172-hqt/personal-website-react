import { useState } from "react";
import Logo from "../assets/images/devjane.png";
import styles from "../assets/styles/nav.module.css";

const navItems = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#services",
    text: "My Services",
  },
  {
    href: "#about",
    text: "About Me",
  },
  {
    href: "#work",
    text: "My Work",
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
          {navItems.map(({ href, text }) => (
            <li className={styles.navItem}>
              <a
                onClick={handleToggleNav}
                className={styles.navLink}
                href={href}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
