import styles from '../assets/styles/my-services.module.css'
import Button from './Button'

const services = [
    {
        title: 'Design + Development',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'E-Commerce',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'WordPress',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
]

export default function MyServices(): JSX.Element {
    return (
        <section className={styles['my-services']} id="services">
            <h2
                className={`section__title section__title--services ${styles.title}`}
            >
                What I do
            </h2>
            <div className={styles.services}>
                {services.map(({ title, content }) => (
                    <div className={styles.service} key={title}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </div>
                ))}
            </div>
            <Button
                text="My Work"
                onClick={() => window.location.replace('/#work')}
            />
        </section>
    )
}
