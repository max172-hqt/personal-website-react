import DevJane from '../assets/images/dev-jane-03.png'
import styles from '../assets/styles/intro.module.css'

export default function Introduction(): JSX.Element {
    return (
        <section className={styles.intro} id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Jane Smith</strong>
            </h1>
            <p
                className={`section__subtitle section__subtitle--intro ${styles.subtitle}`}
            >
                front-end dev
            </p>
            <img className={styles.img} src={DevJane} alt="Dev jane smiling" />
        </section>
    )
}
