import styles from '../assets/styles/about.module.css'
import DevJane2 from '../assets/images/dev-jane-02.jpg'

export default function About(): JSX.Element {
    return (
        <section className={styles.about} id="about">
            <h2
                className={`section__title section__title--about ${styles.title}`}
            >
                Who I am
            </h2>
            <p
                className={`section__subtitle section__subtitle--about ${styles.subtitle}`}
            >
                Designer & developer based out of NYC
            </p>

            <div className={styles.body}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <img
                src={DevJane2}
                alt="Jane leaning against a bus"
                className={styles.img}
            />
        </section>
    )
}
