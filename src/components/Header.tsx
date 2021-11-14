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
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <button className={styles.toggle} aria-label="toggle navigation">
        <span className={styles.hamburger}></span>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map(({href, text}) => (
            <li className={styles.navItem}>
              <a className={styles.navLink} href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
