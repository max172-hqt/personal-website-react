import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeadSideCough, faHeadset, faHdd } from '@fortawesome/free-solid-svg-icons'

const socialMediaMapping = [
  { link: "https://codepen.io", icon: faCoffee},
  { link: "https://instagram.com", icon: faHeadSideCough},
  { link: "https://twitter.com", icon: faHdd},
  { link: "https://github.com", icon: faHeadset},
]

export default function Footer() {
  return (
    <footer className="footer">
        <FontAwesomeIcon icon="coffee" size="xs" />
      <a href="mailto:hello@jane.dev" className="footer__link">email@gmail.com</a>
      <ul className="social-list">
        {socialMediaMapping.map(({link, icon}) => (
          <li className="social-list__item">
              <a className="social-list__link" href={link}>
                <FontAwesomeIcon icon={icon} />
              </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}