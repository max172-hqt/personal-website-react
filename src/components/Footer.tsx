import styles from '../assets/styles/footer.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const socialMediaMapping = [
  { link: 'https://instagram.com', icon: GitHubIcon },
  { link: 'https://twitter.com', icon: TwitterIcon },
  { link: 'https://github.com', icon: InstagramIcon },
]

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <a href="mailto:hello@jane.dev" className={styles.email}>
        hello@devjane.com
      </a>
      <ul className={styles.list}>
        {socialMediaMapping.map(({ link, icon: Icon }) => (
          <li className={styles.item} key={link}>
            <a className={styles.link} href={link}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
