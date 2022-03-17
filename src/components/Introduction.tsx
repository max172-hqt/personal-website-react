import styles from '../assets/styles/intro.module.css'
import MainImg from '../assets/images/main.jpg'

export default function Introduction(): JSX.Element {
  return (
    <section className={styles.intro} id="home">
      <div>
        <h2 className={styles.title}>Hello!</h2>
        <h2 className={`${styles.subtitle}`}>
          I&apos;m Huy Tran. I am a Frontend Engineer.
        </h2>
      </div>
      <img src={MainImg} alt="abstract image" className={styles.image} />
    </section>
  )
}
