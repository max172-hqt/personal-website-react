import { useState } from 'react'
import styles from '../assets/styles/nav.module.css'
import { NavLink } from 'react-router-dom'

const navItems = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Projects',
    to: '/projects',
  },
  {
    text: 'About',
    to: '/about',
  },
]

export default function Header(): JSX.Element {
  const [navOpen, setNavOpen] = useState(false)

  const handleToggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">Huy Tran</NavLink>
      </div>
      <button
        onClick={handleToggleNav}
        className={`${styles.toggle} ${navOpen ? styles.toggleOpen : ''}`}
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
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'var(--clr-dark)' : '',
                    borderBottom: isActive
                      ? '2px solid var(--clr-dark)'
                      : 'inherit',
                  }
                }}
                onClick={() => setNavOpen(false)}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
