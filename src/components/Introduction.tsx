import DevJane from '../assets/images/dev-jane-03.png'
import styles from '../assets/styles/intro.module.css'

export default function Introduction(): JSX.Element {
  return (
    <section className={styles.intro} id="home">
      <h1 className="sectionTitle sectionTitleIntro">
        Hi, I am <strong>Jane Smith</strong>
      </h1>
      <p className={`sectionSubtitle sectionSubtitleIntro ${styles.subtitle}`}>
        front-end dev
      </p>
      <img className={styles.img} src={DevJane} alt="Dev jane smiling" />
    </section>
  )
}
