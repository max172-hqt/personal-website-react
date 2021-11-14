import styles from '../assets/styles/my-work.module.css';
import Portfolio1 from '../assets/images/portfolio-01.jpg';
import Portfolio2 from '../assets/images/portfolio-02.jpg';
import Portfolio3 from '../assets/images/portfolio-03.jpg';
import Portfolio4 from '../assets/images/portfolio-04.jpg';
import Portfolio5 from '../assets/images/portfolio-05.jpg';
import Portfolio6 from '../assets/images/portfolio-06.jpg';
import Portfolio7 from '../assets/images/portfolio-07.jpg';
import Portfolio8 from '../assets/images/portfolio-08.jpg';
import Portfolio9 from '../assets/images/portfolio-09.jpg';
import Portfolio10 from '../assets/images/portfolio-10.jpg';

const portfolioList = [
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5,
  Portfolio6,
  Portfolio7,
  Portfolio8,
  Portfolio9,
  Portfolio10
]

export default function MyWork() {
  return (
    <section className={styles['my-work']} id="work">
      <h2 className={`section__title section__title--work ${styles.title}`}>My work</h2>
      <p className={`section__subtitle section__subtitle--work ${styles.subtitle}`}>A selection of my range of work</p>

      <div className={styles.portfolio}>
        {portfolioList.map((item) => (
          <a href="#work" className={styles.item}>
            <img src={item} alt="" className={styles.img} />
          </a>
        ))}
      </div>
    </section>
  )
}
