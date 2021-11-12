import Logo from '../assets/images/devjane.png';
import styles from '../assets/styles/nav.module.css';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav className={styles.nav}>
          <ul className="nav__list">
            <li className="nav__item"><a href="#home">Home</a></li>
            <li className="nav__item"><a href="#services">My Services</a></li>
            <li className="nav__item"><a href="#">About Me</a></li>
            <li className="nav__item"><a href="#">My Work</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
